import 'rz-ui'
import Page from './components/Page/index'
import Timer from './components/Timer/index'
import CountUp from './components/countUp'

const RZ = {
  Page,
  Timer,
  CountUp
},
  install = Vue => {
    for (let [key, value] of Object.entries(RZ)) Vue.component(key, value) 
  }

!!window && window.Vue && install(window.Vue) // auto install

export default {
  Page,
  install
}
