(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("application", function(exports, require, module) {
module.exports = {

    initialize: function() {
        var Router = require('router');
        this.router = new Router();
        Backbone.history.start();
    }
};
});

;require.register("collections/geolocations", function(exports, require, module) {
Geolocation = require('../models/geolocation');
module.exports = Geolocations = Backbone.Collection.extend({
    model: Geolocation,
    url: 'geolocations'
})

});

;require.register("initialize", function(exports, require, module) {
// The function called from index.html
$(document).ready(function() {
    var app = require('application');

    var locale = 'fr'; // default locale

    // we'll need to tweak the server to allow this
    $.ajax('cozy-locale.json', {
        success: function(data) {
            locale = data.locale
            initializeLocale(locale);
        },
        error: function() {
            initializeLocale(locale);
        }
    });

    // let's define a function to initialize Polyglot
    var initializeLocale = function(locale) {
        var locales = {};
        try {
            locales = require('locales/' + locale);
        }
        catch(err) {
            locales = require('locales/en');
        }

        var polyglot = new Polyglot();
        // we give polyglot the data
        polyglot.extend(locales);

        // handy shortcut
        window.t = polyglot.t.bind(polyglot);
        app.initialize();
    };
});

});

;require.register("locales/en", function(exports, require, module) {
module.exports = {
    "main title": "Welcome to My Moves",
    "main description": "This application will help you visualise your prefered places!",
}
});

;require.register("locales/fr", function(exports, require, module) {
module.exports = {
    "main title": "Bienvenue sur Mes Déplacement",
    "main description": "Cette application vous permet de visualiser les lieux ou vous etes passés. !",
}
});

;require.register("models/geolocation", function(exports, require, module) {
module.exports = Geolocation = Backbone.Model.extend({

})

});

;require.register("models/main", function(exports, require, module) {
var heatmap;

$(function(){
    var myLatlng = new google.maps.LatLng(43.293466, 5.364575);

    var myOptions = {
      zoom: 8,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false,
      scrollwheel: true,
      draggable: true,
      navigationControl: true,
      mapTypeControl: false,
      scaleControl: true,
      disableDoubleClickZoom: false
    };
    var map = new google.maps.Map($("#heatmapArea")[0], myOptions);
    
    heatmap = new HeatmapOverlay(map, {
        "radius":20,
        "visible":true, 
        "opacity":60
    });
  
    

    
    
    // this is important, because if you set the data set too early, the latlng/pixel projection doesn't work
    google.maps.event.addListenerOnce(map, "idle", function(){
    	updateMap(map);
    });
    google.maps.event.addListener(map, 'click', function(e) {
    	listFiles(e.latLng, map);
    });
    google.maps.event.addListener(map, 'bounds_changed', function(e) {
        // updateMap(map);
    });
});
        
function updateMap(map){
	var bound = map.getBounds();
	var queryObject = {
			north: bound.getNorthEast().lat(),
			south: bound.getSouthWest().lat(),
			east : bound.getNorthEast().lng(),
			west : bound.getSouthWest().lng(),
	};
	$.getJSON('/api/area-geodata', queryObject, function(data) {
		var geoData = new Array();
		var googleLatLng = new Array(); 
		$.each(data, function(key, val) {
			geoData.push({lng:val.longitude, lat:val.latitude, count:1});
			googleLatLng.push(latLng = new google.maps.LatLng(val.latitude, val.longitude));
		});
		console.log("nb points:",geoData.length);
		// ajax implementation
		
		// heatmap.setDataSet({max: 2, data: geoData});
		heatmap.setDataSet(testData);

		// google implementation
		//		var gHeatmap = new google.maps.visualization.HeatmapLayer({
		//			  data: googleLatLng
		//			});
		//			gHeatmap.setMap(map);
	});
};
            
function placeMarker(position, map) {
  var marker = new google.maps.Marker({
    position: position,
    map: map
  });
  map.panTo(position);
}

var clickMarker = null;
function listFiles(position, map) {
	if(clickMarker){
		clickMarker.setVisible(false);
	};
	var span = map.getBounds().toSpan();
	var radius = span.lat()<span.lng()?span.lng():span.lat();
	// radius = radius;
	console.log("radius",radius);
	clickMarker = new google.maps.Marker({
	    position: position,
	    map: map
	  });
	  map.panTo(position);
	var latLng = {
			latitude:position.lat(),
			longitude:position.lng(),
			radius:radius * 4
	};
	console.log(latLng);
	$.getJSON('api/geo-datasets', latLng, function(data) {
		$("#datasets").html("");
		$.each(data, function(key, val) {
			console.log(val);
			$("#datasets").append("<tr><td>"+val.name+"</td></tr>")
		});
	});
}

});

;require.register("models/testdata", function(exports, require, module) {
var testData={
    };

});

;require.register("router", function(exports, require, module) {
var AppView = require('views/app_view');
var GeolocationCollection = require('collections/geolocations');

var geolocations = new GeolocationCollection();

module.exports = Router = Backbone.Router.extend({

    routes: {
        '': 'main'
    },

    main: function() {
        var mainView = new AppView({
            collection: geolocations
        });
        mainView.render();
    }
});
});

;require.register("templates/home", function(exports, require, module) {
module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="modal-overlay"></div><div id="loader"><img src="loader.gif" alt="je charge"/></div><div class="navbar navbar-inverse navbar-fixed-top"><div class="navbar-inner"><div class="container"><a data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a><a href="#" class="brand"> Mes Infos Géographiques</a><div class="nav-collapse collapse"><ul class="nav"><li><a href="#dataviz"> Cartes</a></li><li><a href="#about"> A Propos</a></li><li><a href="#contact"> Contact</a></li></ul></div></div></div></div><div id="content" class="container"><!--div(class="hero-unit")--><h2> Mes Infos Géographiques</h2><p>Cette application vous permet de naviguer visuellement dans votre historique des lieux que vous avez les plus fréquentés.<br/></p><div id="dataviz"><div class="row"><div class="span12"><h2> Carte des lieux fréquentés</h2></div><div class="span4"><p> \nLa carte ci contre indique votre fréquentation géographique en se basant sur l\'historique de positionnement géographique de votre téléphone.<br>\nElle permet en un clin d\'oeil de voir les lieux les plus fréquentés sans tenir compte du temps.</p><p> \nPlus la couleur est intense et plus vous avez fréquenté la zone colorée.<br>\nVous pouvez vous déplacer et zoomer sur une zone pour plus de précisions.</p><p>Le graphe de fréquentation ci-dessous est mis à jour lors de vos déplacement sur la carte.</p></div><div class="span8"><!--p(class="text-info")  OpenStreetMap (Leaflet)--><div id="map" style="padding:0;height:400px;cursor:pointer;position:relative;" class="well"></div></div></div><div class="row"><div class="span12"><h2> Graphe de fréquentation</h2></div><div class="span8"><div id="chartArea" style="padding:0;height:200px;cursor:pointer;position:relative;" class="well"></div></div><div class="span4"><p>Ce graphe indique les dates de votre présence sur la zone visible de la carte <br/></p><p>La hauteur du graphe indique le nombre de relevés (votre temps de présence) relatif sur la zone visible de la carte <br/></p><p>En pointant les points de ce graphe, la carte est mise à jour en n\'indiquant QUE les lieux fréquentés à la date pointée.</p></div></div></div><div id="about" class="row"><div class="span12"><h2> A Propos</h2><p> \nL\'appli Mes Infos Géographique à été imaginée dans le cadre du concours mes infos organisé par la Fing.<br/>\nIl à pour objectif de permettre aux utilisateurs de visualiser la carte de ses déplacement.</p><p> \nLes données utilisées ici sont fournies par orange et sont basé sur la triangulation de votre téléphone <br/>\nLa précision des coordonnées est variable et la carte est uniquement indicative, et le fait d\'etre "vu" en un lieu ne signifie pas nécéssairement que vous y étiez. \nCependant il indique que vous n\'étiez vraisemblablement pas loin. <br/></p></div></div><div id="contact" class="row"><div class="span3"><h2> Contacts</h2><p> Patrice Delorme <br/>\n@pdelorme<br/>\npdelorme@lookal.fr</p></div></div><!-- footer      --><footer><p> &copy; Patrice Delorme 2013</p></footer></div>');
}
return buf.join("");
};
});

;require.register("views/app_view", function(exports, require, module) {
var StatsView = require('./map_view');

module.exports = AppView = Backbone.View.extend({

    el: 'body',
    template: require('../templates/home'),
    events: {
        "click #refreshButton": "refreshMap"
    },

    // initialize is automatically called once after the view is constructed
    initialize: function() {
        // this.listenTo(this.collection, "add", this.onBookmarkAdded);
    },

    render: function() {

        // we render the template
        this.$el.html(this.template());
        this.refreshMap();
        // fetch the receipts from the database
        this.collection.fetch();
    },

    refreshMap: function(event) {
      // render the stats view
      mapView = new MapView({
          model: this.collection
      });
      mapView.render();
      // this.$el.find('#tab-content').html(statsView.$el);
    },
    
    coachView:function(event){
    	this.$el.find('#tab-content').html("");
    },
    
    controlView:function(event){
    	this.$el.find('#tab-content').html("");
    }
});
});

;require.register("views/map_view", function(exports, require, module) {
var myLat = 43.293466;
var myLng = 5.364575;

module.exports = MapView = Backbone.View.extend({

    el: '#dataviz',
    
    events: {
        "click #refreshButton": "refreshView"
    },
    
    // initialize is automatically called once after the view is constructed
    initialize: function() {
        var that = this;
        $("#modal-overlay").show();
        $("#loader").show();
		this.fetchData(null, function(){
          $("#modal-overlay").hide();
          $("#loader").hide();
		  that.initLeafletMap();
		  that.initChart();
		  that.updateMap(function(){
            that.updateChart();
		  });
	      navigator.geolocation.getCurrentPosition(
	          function(location){
	                that.latitude = location.coords.latitude;
	                that.longitude = location.coords.longitude;
	                that.gotoLocation(that.longitude,that.latitude);
	          }
	      );
	      this.reloader = setInterval(function(){
	        that.fetchData(null, function(){
	          that.updateMap(function(){
	            that.updateChart();
	          });
	        });
	      },5*60*1000);
		});
	},

	gotoLocation: function (longitude, latitude){
		if(this.lmap){
			this.lmap.setView([latitude,longitude]);
			var that = this;
			that.updateChart();
		}
	},

	initChart:function(){
		// init charts
		this.geolocationChartData = [];
		this.phoneCommunicationChartData = [];
		var chartContainer = this.$el.find("#chartArea")[0];
		var that = this;
		this.chart = new CanvasJS.Chart(chartContainer,{
			title:{
				text: "History",
				fontSize:15,
				fontFamily:"arial",
				fontWeight:"normal",
			},
			axisX:{
			   //labelAngle: 50,
			   valueFormatString: "D/M/Y",
			   labelFontFamily:"arial",
			   labelFontSize:12,
			   lineThickness:0,
			   gridThickness:0,
			   tickThickness:0,
			   interval:1,
			   intervalType:"week"
			},
			axisY:{
				//title:"Kilo Joules : Grammes",
				valueFormatString: "0.##",
				labelFontSize:1,
				//labelFontColor:000,
				lineThickness:0,
				gridThickness:0,
				tickThickness:0,
				minimum:0,
				interval:10
			},
			zoomEnabled:true,
			data : [
					  {
						  type: "line",
						  color: "rgba(54,158,173,.3)",
						  dataPoints: this.geolocationChartData,
						  mouseover: function(e){
							  console.log("geo");
					        that.showDayLocations(e.dataPoint.x);
					      },
					      mouseout: function(e){
						        that.updateMap();
						  },
					  },
					  { 
						  type: "line",
						  color: "rgba(8,15,173,.7)",
						  dataPoints: this.phoneCommunicationChartData,
						  mouseover: function(e){
							  console.log("phone");
							  that.showDayLocations(e.dataPoint.x);
						  },
						  mouseout: function(e){
						      that.updateMap();
						  },
					  }
					]
		});
	},

	initLeafletMap: function(){
		this.lmap = L.map('map').setView([43.2957, 5.3738], 6);

		var tiles = L.tileLayer('http://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
		    attribution: '<a href="https://www.mapbox.com/about/maps/">Terms and Feedback</a>',
		    id: 'examples.map-20v6611k'
		}).addTo(this.lmap);

		var dummy = new Array();
		var options = {
		    //max:1,
		    radius:10,
		    //blur:5,
		    maxZoom:8
		}
		this.lheatmap = L.heatLayer(dummy,options).addTo(this.lmap);
        var that = this;
        this.lmap.on("moveend", function(){
          that.updateChart();
        });
	},
	
    render: function() {
    	var that = this;
    	this.updateMap(function(){
    		that.updateChart();
    	});
    },
    
    showDayLocations: function (day){
    	var dayLData = this.dayLLocations[day];
    	this.lheatmap.setLatLngs(dayLData);
    },
    updateMap: function(callback){
    	this.lheatmap.setLatLngs(this.geoLData);
    },
    
    updateLMap:function(callback){
    	var bound = this.lmap.getBounds();
    	if(!bound)
    		return;
    	var queryObject = {
			north: bound.getNorth(),
			south: bound.getSouth(),
			east : bound.getEast(),
			west : bound.getWest()
		};
    	//console.log("south,north,west,east:",queryObject.south,queryObject.north,queryObject.west,queryObject.east);
    	var that = this;
		this.fetchData(queryObject,function(){
			that.lheatmap.setLatLngs(that.geoLData);
			if(callback)
				callback();
		});
    },
    
	fetchData:function(bounds,callback){
      var that = this;
		$.getJSON('areaGeolocations', bounds, function(data) {
			that.locationData = data;
//			that.geoGData = new Array();
			that.geoLData = new Array();
			$.each(data.geolocationLogs, function(key, val) {
//				that.geoGData.push({lng:val.lng, lat:val.lat, count:1});
				that.geoLData.push([val.lat, val.lng, 1]);
			});
			$.each(data.phoneCommunicationLog, function(key, val) {
//				that.geoGData.push({lng:val.lng, lat:val.lat, count:1});
				that.geoLData.push([val.lat, val.lng, 1]);
			});
			console.log("nb points:",that.geoLData.length);
			if(callback)
				callback();
		});
	},
	
	updateChart: function(){
	  var data = this.locationData;  
	  if(!data)
	      return;
		var that = this;
        var bounds = this.lmap.getBounds();
        this.dayLLocations = {};
		if(data.geolocationLogs) {
	        var dayAccumulator = {};
    		$.each(data.geolocationLogs, function(key, val) {
    		    if(val.lng>bounds.getEast())
    		      return;
                if(val.lng<bounds.getWest())
                  return;
                if(val.lat>bounds.getNorth())
                  return;
                if(val.lat<bounds.getSouth())
                  return;
    
    			var dayParts = val.d.split('-');
    			var day = new Date(dayParts[0], dayParts[1], dayParts[2]);
    			if(!dayAccumulator[day]){
    				dayAccumulator[day] = 1;
    				that.dayLLocations[day] = new Array();
    			} else {
    				dayAccumulator[day] = dayAccumulator[day] + 1;
    			}
    			that.dayLLocations[day].push([val.lat,val.lng]);
    		});
            this.geolocationChartData.length = 0;
            dayAccumulator = this.toChartData(dayAccumulator,this.geolocationChartData);
		}
		if(data.phoneCommunicationLog) {
    		var dayAccumulator = {};
    		$.each(data.phoneCommunicationLog, function(key, val) {
              if(val.lng>bounds.getEast())
                return;
              if(val.lng<bounds.getWest())
                return;
              if(val.lat>bounds.getNorth())
                return;
              if(val.lat<bounds.getSouth())
                return;
    			var dayParts = val.d.split('-');
                var day = new Date(dayParts[0], dayParts[1], dayParts[2]);
    			if(!dayAccumulator[day]){
    				dayAccumulator[day] = 1;
    				that.dayLLocations[day] = new Array();
    			} else {
    				dayAccumulator[day] = dayAccumulator[day] + 1;
    			}
    			that.dayLLocations[day].push([val.lat,val.lng]);
    		});
    		
    		this.phoneCommunicationChartData.length = 0;
    		dayAccumulator = this.toChartData(dayAccumulator,this.phoneCommunicationChartData);
		}
		this.chart.render();
	},
        
	toChartData: function (inputmap, output) {
		output.length = 0;
	  var keys=[];
	  for(var k in inputmap) {
		  keys.push(k);
	  }
	  keys.sort(function(a, b) {
		    a = new Date(a);
		    b = new Date(b);
		    return a>b ? -1 : a<b ? 1 : 0;
		});

	  for(var i=0; i<keys.length; i++) {
		  output.push({x: new Date(keys[i]), y : inputmap[""+keys[i]]});
	  }
	  output.length = keys.length;
	  return output;
	}
});



});

;
//# sourceMappingURL=app.js.map