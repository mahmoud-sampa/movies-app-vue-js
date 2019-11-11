<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <img src="../assets/3d-glasses.png"  class="logo"/>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                    <!--<li class="nav-item active">-->
                        <!--<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
                    <!--</li>-->

                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link" href="#">Link</a>-->
                    <!--</li>-->




                </ul>

                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <button class="btn btn-danger" @click="getpopularMovies()">Popular</button>
                    </li>

                    <li class="nav-item">
                        <button class="btn btn-success" @click="getTopRatedMovies()">Top Rated</button>
                    </li>


                </ul>


                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
                </form>
            </div>
        </nav>


        <div class="row">

            <!--http://image.tmdb.org/t/p/w185/-->
            <div class="card col-sm-3" v-for="movie in moviesList">
                <img v-bind:src="'http://image.tmdb.org/t/p/w342/'+movie.poster_path" class="card-img-top poster-img" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{movie.original_title}}</h5>
                    <p class="card-text">{{movie.overview}}</p>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Movies",
        data: function () {
            return {
                moviesList: ''
            }
        },
        methods: {

            getpopularMovies: function () {
                this.$http.get("http://api.themoviedb.org/3/movie/popular?api_key=25d77ce059102f6f6fefbfe0e211df41")
                    .then(res => {
                        console.log(res.body['results']);
                        this.moviesList = res.body['results'];
                    });
            },
            getTopRatedMovies: function () {
                this.$http.get("http://api.themoviedb.org/3/movie/top_rated?api_key=25d77ce059102f6f6fefbfe0e211df41")
                    .then(res => {
                        console.log(res.body['results']);
                        this.moviesList = res.body['results'];
                    });
            }
        },
        created() {
            this.getpopularMovies();
        }
    }
</script>

<style scoped>
    *{
        overflow: hidden;
    }

    .logo{
        margin-left: 5%;
    }
    .card{

    }
    .card-text {
        height: 100px;
        overflow: hidden;
    }

    .poster-img{
        height: 342px;
        width: 100%;
    }

    .nav-pills button{
        margin-left: 10px;
        margin-right: 10px;
    }
</style>