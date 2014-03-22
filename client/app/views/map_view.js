var myLat = 43.293466;
var myLng = 5.364575;
var myLatlng = new google.maps.LatLng(myLat, myLng);

module.exports = MapView = Backbone.View.extend({

    el: '#dataviz',
    
    events: {
        "click #refreshButton": "refreshView"
    },
    
    // initialize is automatically called once after the view is constructed
    initialize: function() {
    	// this.initGoogleMap();
		this.initLeafletMap();
		this.initChart();
		// this.gotoLocation(myLat,myLng);
		// centre la carte sur l'utilisateur.
    	var that = this;
    	navigator.geolocation.getCurrentPosition(
			function(location){
	    		that.latitude = location.coords.latitude;
	    		that.longitude = location.coords.longitude;
	    		that.gotoLocation(that.longitude,that.latitude);
	    	}
		);
	},

	gotoLocation: function (longitude, latitude){
		if(this.lmap){
			this.lmap.setView([latitude,longitude]);
			var that = this;
			this.updateLMap(function(){
                that.updateChart(that.locationData);
            });
		}
		if(this.gmap){
			this.gmap.center = new google.maps.LatLng(latitude, longitude);
		}
	},
	initGoogleMap: function(){
		this.options = {
		  zoom: 5,
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
		this.gmap = new google.maps.Map(this.$el.find("#googleHeatmapArea")[0], this.options);
		
		this.gheatmap = new HeatmapOverlay(this.gmap, {
		    "radius":20,
		    "visible":true, 
		    "opacity":60
		});


		// this is important, because if you set the data set too early, the latlng/pixel projection doesn't work
		var that = this;
		google.maps.event.addListenerOnce(this.gmap, "idle", function(){
			that.updateGMap();
		});
		google.maps.event.addListener(this.gmap, 'click', function(e) {
			that.updateGMap();
			//alert(e.latLng);
		});
		google.maps.event.addListener(this.gmap, 'bounds_changed', function(e) {
			that.updateGMap(function(){
	    		that.updateChart(that.locationData);
	    	});
		});
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
            that.updateLMap(function() {
                that.updateChart(that.locationData);
            });
        });
	},
	
    render: function() {
    	var that = this;
    	this.updateMap(function(){
    		that.updateChart(that.locationData);
    	});
    },
    
    showDayLocations: function (day){
    	var dayLData = this.dayLLocations[day];
    	this.lheatmap.setLatLngs(dayLData);
    	if(this.gmap){
    	  var dayGData = this.dayGLocations[day];
    	  this.gheatmap.setDataSet({max: 5, data: dayGData});
    	}
    },
    updateMap: function(callback){
    	this.updateLMap(callback);
    	//this.lheatmap.setLatLngs(this.geoLData);
    	if(this.gmap){
    	  this.updateGMap(callback);
    	}
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
    
    updateGMap: function (callback){
    	var bound = this.gmap.getBounds();
    	if(!bound)
    		return;
		var queryObject = {
				north: bound.getNorthEast().lat(),
				south: bound.getSouthWest().lat(),
				east : bound.getNorthEast().lng(),
				west : bound.getSouthWest().lng(),
		};
//		console.log("south,north,west,east:",queryObject.south,queryObject.north,queryObject.west,queryObject.east);
		var that = this;
		this.fetchData(queryObject,function(){
			that.gheatmap.setDataSet({max: 5, data: that.geoGData});
			if(callback)
				callback();
		});
	},
	fetchData:function(bounds,callback){
	  $("#modal-overlay").show();
	  $("#loader").show();
      var that = this;
		$.getJSON('areaGeolocations', bounds, function(data) {
			that.locationData = data;
			that.geoGData = new Array();
			that.geoLData = new Array();
//			var north = -1000;
//			var south = 1000;
//			var east = -1000;
//			var west = 1000;
			$.each(data.geolocationLogs, function(key, val) {
				that.geoGData.push({lng:val.lng, lat:val.lat, count:1});
				that.geoLData.push([val.lat, val.lng, 1]);
//				if(val.longitude<west) west = val.longitude;
//				if(val.longitude>east) east = val.longitude;
//				if(val.latitude>north) north = val.latitude;
//				if(val.latitude<south) south = val.latitude;
			});
			$.each(data.phoneCommunicationLog, function(key, val) {
				that.geoGData.push({lng:val.lng, lat:val.lat, count:1});
				that.geoLData.push([val.lat, val.lng, 1]);
//				if(val.longitude<west) west = val.longitude;
//				if(val.longitude>east) east = val.longitude;
//				if(val.latitude>north) north = val.latitude;
//				if(val.latitude<south) south = val.latitude;
			});
			console.log("nb points:",that.geoGData.length);
//			console.log("result south,north,west,east:",south,north,west,east);
			$("#modal-overlay").hide();
			$("#loader").hide();
			if(callback)
				callback();
		});
	},
	
	updateChart: function(data){
		var that = this;
		var dayAccumulator = {};
		this.dayLLocations = {};
		this.dayGLocations = {};
		$.each(data.geolocationLogs, function(key, val) {
			//var date = new Date(val.t);
            //var day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
			var dayParts = val.d.split('-');
			var day = new Date(dayParts[0], dayParts[1], dayParts[2]);
			if(!dayAccumulator[day]){
				dayAccumulator[day] = 1;
				that.dayLLocations[day] = new Array();
				that.dayGLocations[day] = new Array();
			} else {
				dayAccumulator[day] = dayAccumulator[day] + 1;
			}
			that.dayLLocations[day].push([val.lat,val.lng]);
			that.dayGLocations[day].push({lat:val.lat,lng:val.lng, count:1});
		});
		this.geolocationChartData.length = 0;
		dayAccumulator = this.toChartData(dayAccumulator,this.geolocationChartData);
//		$.each(dayAccumulator, function(key, val){
//			that.geolocationChartData.push({x:new Date(key), y:val});
//		});
		
		var dayAccumulator = {};
		$.each(data.phoneCommunicationLog, function(key, val) {
			//var date = new Date(val.t);
			//var day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
			var dayParts = val.d.split('-');
            var day = new Date(dayParts[0], dayParts[1], dayParts[2]);
			if(!dayAccumulator[day]){
				dayAccumulator[day] = 1;
				that.dayLLocations[day] = new Array();
				that.dayGLocations[day] = new Array();
			} else {
				dayAccumulator[day] = dayAccumulator[day] + 1;
			}
			that.dayLLocations[day].push([val.lat,val.lng]);
			that.dayGLocations[day].push({lat:val.lat,lng:val.lng, count:1});
		});
		
		this.phoneCommunicationChartData.length = 0;
		dayAccumulator = this.toChartData(dayAccumulator,this.phoneCommunicationChartData);
//		$.each(dayAccumulator, function(key, val){
//			that.phoneCommunicationChartData.push({x:new Date(key), y:val});
//		});
		this.chart.render();
	},
        
	placeMarker: function (position, gmap) {
		var marker = new google.maps.Marker({
			position: position,
			map: gmap
		});
		gmap.panTo(position);
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


