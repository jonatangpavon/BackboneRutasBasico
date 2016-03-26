var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

var MovieView = require('./movie2');
var MoviesList = Backbone.View.extend({
	tagName: 'section',

	render:function(){
		//copiamos en that el this y a la router le añadimos that.router
		var that = this;
		var moviesView = this.collection.map(function(movie){
			return (new MovieView({model: movie,router: that.router})).render().el;

		});
		this.$el.html(moviesView);
		return this;
	},

	// Para la ruta
	initialize: function(options){		
		this.router =options.router;
	}

});
module.exports = MoviesList;