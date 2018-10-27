// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { router } from './router/index.js'

Vue.config.productionTip = false

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:9085';
window.axios = axios;

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
// import BootstrapVue from 'bootstrap-vue';
// Vue.use(BootstrapVue);

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import '@/assets/css/Glyphter.css';

import VueSession from 'vue-session';
Vue.use(VueSession)
    //   , {
    //     persist: true
    // });
new Vue({
    el: '#app',
    router,
    axios,
    components: { App },
    template: '<App/>'
})