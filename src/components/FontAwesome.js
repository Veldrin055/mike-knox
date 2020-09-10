import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export const setupFontAwesome = (vue) => {
  library.add(faInstagram)
  vue.component('font-awesome-icon', FontAwesomeIcon)
}
