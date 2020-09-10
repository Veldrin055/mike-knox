import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/styles/index.css'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Principles from './components/Principles.vue'
import Pillars from './components/Pillars.vue'

Vue.config.productionTip = false

library.add(faFontAwesome)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/principles', component: Principles },
  { path: '/pillars', component: Pillars },
]

Vue.use(VueRouter)

const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
