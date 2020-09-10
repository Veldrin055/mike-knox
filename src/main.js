import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { setupFontAwesome } from './components/FontAwesome'

import './assets/styles/index.css'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Principles from './components/Principles.vue'
import Pillars from './components/Pillars.vue'
import Contact from './components/Contact.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/principles', component: Principles },
  { path: '/pillars', component: Pillars },
  { path: '/contact', component: Contact },
]

Vue.use(VueRouter)

const router = new VueRouter({ routes })

setupFontAwesome(Vue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
