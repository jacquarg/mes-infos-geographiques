americano = require('americano');

module.exports = PhoneCommunicationLog = americano.getModel('phonecommunicationlog', {
	'origin': String,
    'timestamp': Date,
    'latitude': Number,
    'longitude': Number,
    'radius': Number,
    'timestamp': Date,
    'type':String,
    'direction':String,
    'correspondantNumber': String
});

PhoneCommunicationLog.all = function(callback) {
	PhoneCommunicationLog.request(
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
	PhoneCommunicationLog.request(
        "bytimestamp", 
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

PhoneCommunicationLog.byLatitudeRange = function(north, south, callback) {
	PhoneCommunicationLog.request(
        "bylatitude", 
        {
        	startKey : north,
        	endKey: south,
            descending: true

        },
        function(err, instances) {
            callback(null, instances);
        }
    );
};

PhoneCommunicationLog.byGeoTile = function(geotile, callback) {
	PhoneCommunicationLog.request(
        "bygeotile", 
        {
        	key : geotile,
        },
        function(err, instances) {
            callback(null, instances);
        }
    );
};