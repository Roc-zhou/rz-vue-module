import Page from './components/Page/index'

const RZ = {
  Page,
},
  install = Vue => {
    for (let [key, value] of Object.entries(RZ)) Vue.component(key, value) 
  }

!!window && window.Vue && install(window.Vue) // auto install

export default {
  Page,
  install
}
