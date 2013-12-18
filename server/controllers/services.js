var Request = require('request-json');
var Batch = require('batch');
var GeolocationLog = require('../models/geolocationlog');

module.exports.all = function(req, res) {
	  GeolocationLog.all(function(err, geolocationLogData) {
	    if(err != null) {
	      res.send(500, "An error has occurred -- " + err);
	    }
	    else {
	      
	      PhoneCommunicationLog.all(function(err, phoneCommunicationLogData) {
	  	    if(err != null) {
	  	      res.send(500, "An error has occurred -- " + err);
	  	    }
	  	    else {
	  	      data = {"geolocationLogs": geolocationLogData,
	  	              "phoneCommunicationLog": phoneCommunicationLogData};
	  	      res.send(200, data);
	  	    }
	  	  });
	    }
	  });
	};
	
module.exports.bygeotile = function(req, res) {
	var latitude = req.body.latitude;
	var longitude = req.body.longitude;
	
	var geotile = ""+new Number(latitude).toFixed(2)+"-"+new Number(longitude).toFixed(2);
	GeolocationLog.byGeoTile(geotile, function(err, instances) {
	    if(err != null) {
	      res.send(500, "An error has occurred -- " + err);
	    }
	    else {
	      data = {"geolocationLogs": instances};
	      res.send(200, data);
	    }
	  });
}



