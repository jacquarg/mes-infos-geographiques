americano = require('americano');

module.exports = PhoneCommunicationLog = americano.getModel('phonecommunicationlog', {
	'origin': String,
    'timestamp': Date,
    'latitude': Number,
    'longitude': Number,
    'radius': Number,
    'timestamp': Date
});

PhoneCommunicationLog.all = function(callback) {
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

PhoneCommunicationLog.dateRange = function(fromDate, toDate, callback) {
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
PhoneCommunicationLog.byGeoTile = function(geotile, callback) {
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