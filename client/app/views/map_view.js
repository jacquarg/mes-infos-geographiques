var myLatlng = new google.maps.LatLng(43.293466, 5.364575);


module.exports = MapView = Backbone.View.extend({

    el: '#dataviz',
    
    events: {
        "click #refreshButton": "refreshView"
    },
    
    // initialize is automatically called once after the view is constructed
    initialize: function() {
    	this.options = {
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
		this.map = new google.maps.Map(this.$el.find("#heatmapArea")[0], this.options);
		
		this.heatmap = new HeatmapOverlay(this.map, {
		    "radius":20,
		    "visible":true, 
		    "opacity":60
		});


		// this is important, because if you set the data set too early, the latlng/pixel projection doesn't work
		var that = this;
		google.maps.event.addListenerOnce(this.map, "idle", function(){
			that.updateMap(that.map);
		});
		google.maps.event.addListener(this.map, 'click', function(e) {
			that.updateMap(that.map);
			//alert(e.latLng);
		});
		google.maps.event.addListener(this.map, 'bounds_changed', function(e) {
			that.updateMap(that.map, function(){
	    		that.updateChart(that.locationData);
	    	});
		});
		
		// init charts
		this.geolocationChartData = [];
		this.phoneCommunicationChartData = [];
		var chartContainer = this.$el.find("#chartArea")[0];
		this.chart = new CanvasJS.Chart(chartContainer,{
			title:{
				text: "History"
			},
			axisX:{
			   labelAngle: 50,
			   //valueFormatString: "D/M/Y",
			},
			zoomEnabled:true,
			data : [
					  {
						  type: "spline",
						  color: "rgba(54,158,173,.7)",
						  dataPoints: this.geolocationChartData
					  },
					  {
						  type: "spline",
						  color: "rgba(12,25,73,.7)",
						  dataPoints: this.phoneCommunicationChartData
					  }
					]
		});
	},

    render: function() {
    	this.updateMap(this.map, function(){
    		this.updateChart(this.locationData);
    	});
    	
    },

    updateMap: function (map, callback){
    	var bound = map.getBounds();
		var queryObject = {
				north: bound.getNorthEast().lat(),
				south: bound.getSouthWest().lat(),
				east : bound.getNorthEast().lng(),
				west : bound.getSouthWest().lng(),
		};
		var that = this;
		$.getJSON('areaGeolocations', queryObject, function(data) {
			that.locationData = data;
			var geoData = new Array();
			var googleLatLng = new Array(); 
			$.each(data.geolocationLogs, function(key, val) {
				geoData.push({lng:val.longitude, lat:val.latitude, count:5});
			});
			$.each(data.phoneCommunicationLog, function(key, val) {
				geoData.push({lng:val.longitude, lat:val.latitude, count:5});
			});
			console.log("nb points:",geoData.length);
			
			that.heatmap.setDataSet({max: 1, data: geoData});
			if(callback)
				callback();
		});
	},
	
	updateChart: function(data){
//    	var bound = map.getBounds();
//		var queryObject = {
//				north: bound.getNorthEast().lat(),
//				south: bound.getSouthWest().lat(),
//				east : bound.getNorthEast().lng(),
//				west : bound.getSouthWest().lng(),
//		};
//		$.getJSON('areaGeolocations', queryObject, function(data) {
//			console.log("nb points:",data.geolocationLogs.length + data.phoneCommunicationLog.length);
//		});
		var that = this;
		var dayAccumulator = {};
		$.each(data.geolocationLogs, function(key, val) {
			var date = new Date(val.timestamp);
			var day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
			if(!dayAccumulator[day]){
				dayAccumulator[day] = 1;
			} else {
				dayAccumulator[day] = dayAccumulator[day] + 1;
			}
			
		});
		this.geolocationChartData.length = 0;
		dayAccumulator = this.toChartData(dayAccumulator,this.geolocationChartData);
//		$.each(dayAccumulator, function(key, val){
//			that.geolocationChartData.push({x:new Date(key), y:val});
//		});
		
		var dayAccumulator = {};
		$.each(data.phoneCommunicationLog, function(key, val) {
			var date = new Date(val.timestamp);
			var day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
			if(!dayAccumulator[day]){
				dayAccumulator[day] = 1;
			} else {
				dayAccumulator[day] = dayAccumulator[day] + 1;
			}
		});
		
		this.phoneCommunicationChartData.length = 0;
		dayAccumulator = this.toChartData(dayAccumulator,this.phoneCommunicationChartData);
//		$.each(dayAccumulator, function(key, val){
//			that.phoneCommunicationChartData.push({x:new Date(key), y:val});
//		});
		this.chart.render();
	},
        
	placeMarker: function (position, map) {
		var marker = new google.maps.Marker({
			position: position,
			map: map
		});
		map.panTo(position);
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


