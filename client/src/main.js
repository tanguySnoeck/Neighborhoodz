// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('./assets/css/mediaelementplayer.min.css')
require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('./assets/fonts/icomoon/style.css')
require('./assets/css/bootstrap.min.css')
require('./assets/css/magnific-popup.css')
require('./assets/css/jquery-ui.css')
require('./assets/css/owl.carousel.min.css')
require('./assets/css/owl.theme.default.min.css')
require('./assets/css/bootstrap-datepicker.css')
require('./assets/fonts/flaticon/font/flaticon.css')
require('./assets/css/aos.css')
require('./assets/css/style.css')
require('./assets/css/vue-multiselect.min.css')

// require('./assets/js/jquery-3.3.1.min.js')
// require('./assets/js/jquery-migrate-3.0.1.min.js')
// require('./assets/js/jquery-ui.js')
// require('./assets/js/popper.min.js')
// require('./assets/js/owl.carousel.min.js')
// require('./assets/js/jquery.stellar.min.js')
// require('./assets/js/jquery.countdown.min.js')
// require('./assets/js/jquery.magnific-popup.min.js')
// require('./assets/js/bootstrap-datepicker.min.js')
// require('./assets/js/aos.js')
// require('./assets/js/bootstrap.min.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
