import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import { setupFontAwesome } from './components/FontAwesome'

import './assets/styles/index.css'

Vue.config.productionTip = false

Vue.use(VueScrollTo)

setupFontAwesome(Vue)

new Vue({
  render: h => h(App)
}).$mount('#app')
