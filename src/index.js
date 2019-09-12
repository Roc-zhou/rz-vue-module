import 'rz-ui'
import Page from './components/Page/index'
import Timer from './components/Timer/index'
import CountUp from './components/CountUp'

const components = [
  Page,
  Timer,
  CountUp
],
  install = Vue => {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }

!!window && window.Vue && install(window.Vue) // auto install

export default {
  ...components,
  install
}
