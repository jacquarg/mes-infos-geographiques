/*
* Put here the requests to the DataSystem.
*/

americano = require('americano');

module.exports = {
    geolocationlog: {
        all: americano.defaultRequests.all,
        bytimestamp: function(doc){
        	emit(doc.timestamp, doc);
        },
        bygeotile: function(doc){
        	emit(""+new Number(doc.latitude).toFixed(2)+"-"+new Number(doc.longitude).toFixed(2), doc);
        },
        bylatitude: function(doc){
        	emit(doc.latitude, doc);
        }
    },
    phonecommunicationlog: {
        all: americano.defaultRequests.all,
        bytimestamp: function(doc){
        	emit(doc.timestamp, doc);
        },
        bygeotile: function(doc){
        	emit(""+new Number(doc.latitude).toFixed(2)+"-"+new Number(doc.longitude).toFixed(2), doc);
        },
        bylatitude: function(doc){
        	emit(doc.latitude, doc);
        }
    }
};
