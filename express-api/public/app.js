Vue.component('movie', {
    template: "#template-movie-raw",
    props: ['movie'],
    methods: {
        editMovie: function (movie) {
            movie.editing = true;
        },
        updateMovie: function (movie) {
            axios.patch('/api/movies/' + movie.id, movie)

            movie.editing = false;
        },
        createMovie: function () {
            var newMovie = {
                "title": "",
                "writer": "",
                "editing": true
            };
            this.stories.push(newMovie);
        },
        storeMovie: function (movie) {
            axios.post('/api/movies/', movie).then(function (response) {
                Vue.set(movie, 'id', response.data.id)
                movie.editing = false;
            });
        },
        deleteMovie: function (movie) {
            var index = this.$parent.movies.indexOf(movie);
            this.$parent.movies.splice(index, 1)
            axios.delete('/api/movies/' + movie.id)
        }
    },
});
var vm = new Vue({
    el: '#app',
    data: {
        movies: []
    },
    mounted: function () {
        axios.get('/api/movies')
            .then(function (response) {

                var moviesReady = response.data.map(movie => {
                    movie.editiing = false;
                    return movie
                })
                vm.movies = moviesReady
            })
    }
})