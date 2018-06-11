import Vue from 'vue'
import App from './App.vue'
import axios from 'axios' 
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.prototype.axios = axios

Vue.use(VueRouter)


import Cars from './components/Cars'


const routes = [
  { path: '/cars', component: Cars },
]



const router = new VueRouter({
  routes: routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
