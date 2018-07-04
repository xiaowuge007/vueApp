// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MD5 from 'md5'
import router from './router'
import MintUI from 'mint-ui'
import './plugins/focus.js'
import './login'
Vue.config.productionTip = false
Vue.use(MintUI)
console.log(MD5('D^4Q!h9z4l7EJK8Fkb1526637600000'))
/*这是新加的*/
let a = '22222'
/*这是后加的*/
a = '3333333333333'
/*document.addEventListener("deviceready", onDeviceReady, false)
function onDeviceReady () {
}*/
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
