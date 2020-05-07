import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import Snotify from 'vue-snotify';
import 'vue-snotify/styles/material.css';

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'
import store from './store'


const configOptions = {
  apiKey: "AIzaSyBKDFyDpstlLI0Ax6nolFwYatQ97BlQ4sE",
  authDomain: "don-quizotee.firebaseapp.com",
  databaseURL: "https://don-quizotee.firebaseio.com",
  projectId: "don-quizotee",
  storageBucket: "don-quizotee.appspot.com",
  messagingSenderId: "212812222047",
  appId: "1:212812222047:web:e1389ada48b412e80515ea",
  measurementId: "G-MEEY2KYH5R"
};

firebase.initializeApp(configOptions);


Vue.use(Snotify);
Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
