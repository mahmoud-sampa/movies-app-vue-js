<template>
    <div id="app">

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <router-link :to="{name:'popular'}"><img src="./assets/3d-glasses.png" class="logo"/></router-link>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">


                    </ul>

                    <ul class="nav nav-pills">

                        <router-link tag="li" class="nav-item pop" :to="{name:'popular'}"><a class="btn btn-danger">Popular</a>
                        </router-link>
                        <router-link tag="li" class="nav-item pop" :to="{name:'top_rated',params: { sampa: 101 }}"><a
                                class="btn btn-success">Top Rated</a></router-link>


                    </ul>


                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" v-model="keyword" placeholder="Search"
                               aria-label="Search">
                        <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
                    </form>
                </div>
            </nav>


            <router-view></router-view>


        </div>

    </div>
</template>

<script>

    export default {
        name: 'app',
        data: function () {
            return {
                keyword: ''
            }
        },
        watch: {
            keyword: function () {
               // alert('Keyword Updated');
                this.$router.push({ name: 'search', params: { keyword: this.keyword } })

            }
        }
    }
</script>


<style scoped>
    * {
        overflow: hidden;
    }

    .logo {

        padding-left: 50px;
    }

    .nav-pills a {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>