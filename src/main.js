import Vue from 'vue'
import App from './App.vue'
import RZ from './index'

Vue.use(RZ)


/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount("#app")