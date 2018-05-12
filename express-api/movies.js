// var fs = require('fs'); 

var movies = [{
    title: 'My horse is amazing.',
    director: 'Mr. Weebl',
    id: 1,
},
{
    title: 'Narwhals invented Shish Kebab.',
    director: 'Mr. Weebl',
    id: 2,
},
{
    title: 'The dark side of the Force is stronger.',
    director: 'Darth Vader',
    id: 3,
},
{
    title: 'One does not simply walk into Mordor',
    director: 'Boromir',
    id: 4,
},]


exports.list = movies;

exports.update = function(req, res) {

    var movie = movies.filter(movie => movie.id == req.params.id)[0];

    if(movie && req.body) {
        
        movie.title = req.body.title;

        movie.director = req.body.director;
        
        console.log("list " + movies);
    }
}

exports.create = function(req, res) {
    var newMovie = {title: req.body.title, director: req.body.director, id: movies[movies.length-1].id + 1}
    movies.push(newMovie);
    res.json(movies[movies.length-1]);
}

exports.delete = function(req, res) {

    var movie = movies.filter(movie => movie.id == req.params.id)[0];

    if(movie) {
        var index = movies.indexOf(movie);
    
        movies.splice(index, 1);

    }
}