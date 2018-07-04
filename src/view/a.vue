<template>
  <div class="shop-tab-box">
    <div>
      <div class="shop-loading-box" v-if="!flag"><span class="t-loading"><i class="icon-spinner"></i></span></div>
      <div v-if="flag">
        欢迎来到鞋子商城!
        <ul>
          <li class="list-item" v-for="li in list">{{li}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      flag: false,
      list: []
    }
  },
  created () {
    var self = this
    setTimeout(function () {
      self.list = ['鞋子1', '鞋子2', '鞋子2', '鞋子3', '鞋子4']
      self.flag = true
    }, 2000)
  }
}
</script>
