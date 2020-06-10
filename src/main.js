import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import Snotify from 'vue-snotify';
import 'vue-snotify/styles/material.css';
import VueSimpleAlert from "vue-simple-alert";

import axios from 'axios'
import VueAxios from 'vue-axios'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'
import store from './store'


const configOptions = {
  apiKey: "AIzaSyA-ajSn3uqqKs7hbl9kHauUaYdqkx9N1F4",
  authDomain: "don-quizotee-66b18.firebaseapp.com",
  databaseURL: "https://don-quizotee-66b18.firebaseio.com",
  projectId: "don-quizotee-66b18",
  storageBucket: "don-quizotee-66b18.appspot.com",
  messagingSenderId: "122856884575",
  appId: "1:122856884575:web:5ca6c4b4319a68ecd90eea"
};

firebase.initializeApp(configOptions);


Vue.use(VueAxios, axios);
Vue.use(Snotify);
Vue.use(VueSimpleAlert)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(require('vue-moment'))

let app
firebase.auth().onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app') 
  }
  console.log(user)
})


