import PopularMovies from './components/PopularMovies.vue'
import TopRatedMovies from './components/TopRatedMovies.vue'
import MovieDetails from './components/MovieDetails.vue'

export default [
    {
        path: '/', name: 'home', component: PopularMovies
    },
    {
        path: '/popular', name: 'popular', component: PopularMovies
    },

    {
        path: '/top-rated', name: 'top_rated', component: TopRatedMovies
    },

    {
        path: '/movie/:id/details', name: 'movie_details', component: MovieDetails
    },
    {path: '*'}
];


