/* 
* Set the routes of your app here.
*/ 

Services = require('./services');

module.exports = {
  'geolocations': {
      get: Services.all
  },
  'areaGeolocations' : {
	  get : Services.byArea
  },
  'byDateRange': {
	  get : Services.byDateRange
  }
};

