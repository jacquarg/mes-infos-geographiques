var AppView = require('views/app_view');
var GeolocationCollection = require('collections/geolocations');

var geolocations = new GeolocationCollection();

module.exports = Router = Backbone.Router.extend({

    routes: {
        '': 'main'
    },

    main: function() {
        var mainView = new AppView({
            collection: geolocations
        });
        mainView.render();
    }
});