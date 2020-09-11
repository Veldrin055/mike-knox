import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { setupFontAwesome } from './components/FontAwesome'

import './assets/styles/index.css'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Principles from './views/Principles.vue'
import Pillars from './views/Pillars.vue'
import Contact from './views/Contact.vue'

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
