<template>

    <div class="row">
        <!--http://image.tmdb.org/t/p/w185/-->
        <div class="card col-sm-3" v-for="movie in moviesList">
            <img v-bind:src="'http://image.tmdb.org/t/p/w342/'+movie.poster_path" class="card-img-top poster-img"
                 alt="">
            <div class="card-body">
                <h5 class="card-title">{{movie.original_title}}</h5>
                <p class="card-text">{{movie.overview}}</p>
                <router-link :to="{ name: 'movie_details', params: { id: movie.id }}">Details</router-link>

            </div>
        </div>
    </div>

</template>

<script>
    import MovieDetails from "./MovieDetails.vue";

    export default {
        components: {
            MovieDetails
        },
        name: "Movies",
        data: function () {
            return {
                moviesList: '',

            }
        },
        methods: {

            getMovies: function () {
                this.$http.get("http://api.themoviedb.org/3/movie/top_rated?api_key=25d77ce059102f6f6fefbfe0e211df41")
                    .then(res => {
                        console.log(res.body['results']);
                        this.moviesList = res.body['results'];
                    });
            },


        },
        created() {
            this.getMovies();
        },
        beforeRouteUpdate (to, from, next) {
            this.getMovies();
            next();
        }
    }
</script>

<style scoped>
    .card {

    }

    .card-text {
        height: 100px;
        overflow: hidden;
    }

    .poster-img {
        height: 342px;
        width: 100%;
    }

</style>