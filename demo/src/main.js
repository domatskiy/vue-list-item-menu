import Vue from 'vue'
import App from './App.vue'
import UIBoxPlugin from 'plugin'

console.log('UIBoxPlugin', UIBoxPlugin)
Vue.use(UIBoxPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
