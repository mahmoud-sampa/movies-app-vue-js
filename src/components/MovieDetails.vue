<template>
    <div class="row">
        <div class="col-md-12">
            <img class="back-image" :src="'http://image.tmdb.org/t/p/original/'+movie.backdrop_path"/>
            <h1>{{movie.original_title}}</h1>

            <img class="poster" :src="'http://image.tmdb.org/t/p/w185/'+movie.poster_path"/>
            <h6>{{movie.release_date}} <i class="fa fa-calendar"></i></h6>
            <h6>{{movie.vote_average}}/10 <i class="fa fa-star text-blue"></i></h6>
            <p class="overview">{{movie.overview}}</p>
        </div>
        <div class="col-md-12">
        </div>

    </div>
</template>

<script>
    export default {
        name: "MovieDetails",
        data: function () {
            return {
                movie: ''
            }
        },
        methods: {
            getMovieById: function (id) {

                this.$http.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=25d77ce059102f6f6fefbfe0e211df41")
                    .then(res => {
                        console.log(res.body['results']);
                        this.movie = res.body;
                    });

            }
        },
        created: function () {
            this.getMovieById(this.$route.params.id);
        }, beforeRouteUpdate(to, from, next) {
            this.getMovieById(this.$route.params.id);
            next();
        }
    }
</script>

<style scoped>

    * {
        text-align: center;
    }

    .back-image {
        margin: 0 10% 0 10%;
        width: 80%;
        height: 40%;
    }

    .overview {
        margin: 30px 10% 20px 10%;
        float: left;
    }
</style>