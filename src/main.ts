import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/plugins/element-ui'

import '@/styles/index.scss'

import '@unocss/reset/tailwind.css'
import 'uno.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
