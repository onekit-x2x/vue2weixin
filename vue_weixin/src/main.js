import Vue from '../onekit/vue.js'
const App = './App'
import router from './router/index'
import store from './store/index'

  Vue.config.productionTip = false
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

