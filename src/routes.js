import Movies from './components/Movies.vue'
import MovieDetails from './components/MovieDetails.vue'

export default [
    {path:'home',component:Movies},
    {path:'movie-details/:id',component:MovieDetails},
];