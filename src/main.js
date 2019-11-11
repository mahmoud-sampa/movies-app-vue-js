import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routes from './routes';
//import BootstrapVue from 'bootstrap-vue'

// app.js
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import jquery from 'jquery';


// Vue.use(BootstrapVue)
// Vue.use(jquery)
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false


const router = new VueRouter(
    {
        routes,
        mode: 'history'
    }
);

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
