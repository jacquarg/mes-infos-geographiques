/* 
* Set the routes of your app here.
*/ 

Services = require('./services');

module.exports = {
  'geolocations': {
      get: Services.all
  },
  'bygeotile' : {
	  get : Services.bygeotile
  }
};

