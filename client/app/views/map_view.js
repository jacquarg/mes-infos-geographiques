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
		this.fetchData(null, function(){
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
	  $("#modal-overlay").show();
	  $("#loader").show();
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
			$("#modal-overlay").hide();
			$("#loader").hide();
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


