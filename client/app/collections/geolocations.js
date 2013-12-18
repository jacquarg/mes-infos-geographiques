Geolocation = require('../models/geolocation');
module.exports = Geolocations = Backbone.Collection.extend({
    model: Geolocation,
    url: 'geolocations'
})
