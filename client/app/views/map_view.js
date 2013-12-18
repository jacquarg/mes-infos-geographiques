var myLatlng = new google.maps.LatLng(43.293466, 5.364575);


module.exports = MapView = Backbone.View.extend({

    el: '#heatmapArea',
    
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
		this.map = new google.maps.Map(this.$el[0], this.options);
		
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
			alert(e.latLng);
		});
		google.maps.event.addListener(this.map, 'bounds_changed', function(e) {
		    that.updateMap(that.map);
		});
	},

    render: function() {
    	
    },

    updateMap: function (map){
    	var bound = map.getBounds();
//		var queryObject = {
//				north: bound.getNorthEast().lat(),
//				south: bound.getSouthWest().lat(),
//				east : bound.getNorthEast().lng(),
//				west : bound.getSouthWest().lng(),
//		};
		var that = this;
		// $.getJSON('/geolocations', queryObject, function(data) {
		$.getJSON('geolocations', function(data) {
			var geoData = new Array();
			var googleLatLng = new Array(); 
			$.each(data.geolocationLogs, function(key, val) {
				geoData.push({lng:val.longitude, lat:val.latitude, count:1});
				googleLatLng.push(latLng = new google.maps.LatLng(val.latitude, val.longitude));
			});
			$.each(data.phoneCommunicationLog, function(key, val) {
				geoData.push({lng:val.longitude, lat:val.latitude, count:1});
				googleLatLng.push(latLng = new google.maps.LatLng(val.latitude, val.longitude));
			});
			console.log("nb points:",geoData.length);
			// ajax implementation
			
			that.heatmap.setDataSet({max: 1, data: geoData});
		
			// google implementation
//					var gHeatmap = new google.maps.visualization.HeatmapLayer({
//						  data: googleLatLng
//						});
//						gHeatmap.setMap(that.map);
		});
	},
        
	placeMarker: function (position, map) {
		var marker = new google.maps.Marker({
			position: position,
			map: map
		});
		map.panTo(position);
	}
});
