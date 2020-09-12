import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faPagelines, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export const setupFontAwesome = (vue) => {
  library.add(faInstagram, faHeart, faUsers, faPagelines, faLinkedin, faFacebook)
  vue.component('font-awesome-icon', FontAwesomeIcon)
}
