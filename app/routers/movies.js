var Backbone = require('backbone');
var Movies = require("./collections/movies");
var data = require('../movies.json');
var movies = new Movies(data);
var MoviesList = require('./views/moviesList');
var _ = require('underscore');

var MoviesRouter = Backbone.Router.extend({
routes:{
	'movies/:id':'selectMovie',
	'':'showMain'
},

selectMovie: function(id){
	this.movies.resetSelected();
	this.movies.selectByID(id);	
},

showMain: function(){
	this.moviesList.render();
},

initialize: function(options){
	this.movies = movies;
	this.moviesList= new MoviesList({
		el: options.el,
		collection:movies
	}); 	//Importante: Renderiza de nuevo en la siguiente ruta movies/:id

	_.extend(this.moviesList, {router:this});
	this.moviesList.render();
	;
}

});
module.exports = MoviesRouter;
/*
Se han definido dos rutas la primer /movies/:id con un triggers que retorna selectMovies y la segunda una ruta vacía que muestra main
*/