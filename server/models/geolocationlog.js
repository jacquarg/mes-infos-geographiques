americano = require('americano');

module.exports = GeolocationLog = americano.getModel('geolocationlog', {
	'origin': String,
    'timestamp': Date,
    'latitude': Number,
    'longitude': Number,
    'radius': Number,
    'timestamp': Date
});

GeolocationLog.all = function(callback) {
	GeolocationLog.request(
        "bytimestamp", 
        {
            descending: true

            },
        function(err, instances) {
            callback(null, instances);
        }
    );
};

GeolocationLog.dateRange = function(fromDate, toDate, callback) {
	GeolocationLog.request(
        "byTimestamp", 
        {
        	startKey : fromDate,
        	endKey: toDate,
            descending: true

        },
        function(err, instances) {
            callback(null, instances);
        }
    );
};
GeolocationLog.byGeoTile = function(geotile, callback) {
	GeolocationLog.request(
        "bygeotile", 
        {
        	key : geotile,
        },
        function(err, instances) {
            callback(null, instances);
        }
    );
};