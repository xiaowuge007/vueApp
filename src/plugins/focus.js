/**
 * Created by pactera on 2018/3/19.
 */
import Vue from 'vue'
Vue.directive('tap', {
  update: function (el, binding) {
    el.addEventListener('touchstart', function (e) {
      binding.value.tap(e)
    }, false)
  }
})
