<template>
  <div class="shop-tab-box" id="shop-tab-box">
    <div>
      <div class="shop-loading-box" v-if="!flag"><span class="t-loading"><i class="icon-spinner"></i></span></div>
      <div class="loading-dowm"></div>
      <div class="main">
        <div  v-if="flag">
          欢迎来到裤子商城!
          <ul>
            <li class="list-item" v-for="li in list">{{li}}</li>
          </ul>
        </div>
        <ul>
          <li class="list-item" @click="go">1</li>
          <li class="list-item">2</li>
          <li class="list-item">3</li>
          <li class="list-item">4</li>
          <li class="list-item">5</li>
          <li class="list-item">6</li>
          <li class="list-item">7</li>
          <li class="list-item">8</li>
          <li class="list-item">9</li>
          <li class="list-item">10</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import '../plugins/iscroll-probe'
export default {
  data () {
    return {
      flag: false,
      list: [],
      scroll: null
    }
  },
  created () {
    var self = this
    setTimeout(function () {
      self.list = ['裤子1', '裤子2', '裤子2', '裤子3', '裤子4']
      self.flag = true
    }, 2000)
  },
  mounted () {
    var self = this
    setTimeout(function () {
      self.scroll = new IScroll('#shop-tab-box', {
        scrollbars: true,
        mouseWheel: false,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        startY: -40,
        probeType: 2,
        bindToWrapper: true
      })
      self.scroll.on('scrollEnd', function () {
        this.scrollTo(0, -40)
      })
    }, 2200)

  },
  methods: {
    go: function () {
      alert('0000')
    }
  }
}
</script>
<style>
  .main{
    z-index:1;
    background-color: #fff;
    width:100%;
  }
  .loading-dowm{
    background-color: #42b983;
    height: 40px;
  }
</style>
