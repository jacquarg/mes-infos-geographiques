var StatsView = require('./map_view');

module.exports = AppView = Backbone.View.extend({

    el: 'body',
    template: require('../templates/home'),
    events: {
        "click #refreshButton": "refreshMap"
    },

    // initialize is automatically called once after the view is constructed
    initialize: function() {
        // this.listenTo(this.collection, "add", this.onBookmarkAdded);
    },

    render: function() {

        // we render the template
        this.$el.html(this.template());
        this.refreshMap();
        // fetch the receipts from the database
        this.collection.fetch();
    },

    refreshMap: function(event) {
      // render the stats view
      mapView = new MapView({
          model: this.collection
      });
      mapView.render();
      // this.$el.find('#tab-content').html(statsView.$el);
    },
    
    coachView:function(event){
    	this.$el.find('#tab-content').html("");
    },
    
    controlView:function(event){
    	this.$el.find('#tab-content').html("");
    }
});