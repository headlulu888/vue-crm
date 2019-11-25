import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import dateFilter from '@/filters/date.filters'

import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyCRcqsZw-3K2m7GqCHkyORx5R-6sFYGmZQ",
  authDomain: "vue-crm-headlulu.firebaseapp.com",
  databaseURL: "https://vue-crm-headlulu.firebaseio.com",
  projectId: "vue-crm-headlulu",
  storageBucket: "vue-crm-headlulu.appspot.com",
  messagingSenderId: "964998366178",
  appId: "1:964998366178:web:dff83c4d6d23f30d47afbb",
  measurementId: "G-37F3BTKJYW"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})