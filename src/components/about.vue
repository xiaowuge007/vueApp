<template>
  <div class="one">
    <mt-header fixed title="商城">
      <mt-button icon="add" slot="right"></mt-button>
      <mt-button @click="back" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="m-tab-bar">
      <div @click="change(tab.id)" v-for="tab in tabList" v-bind:class="{ active: currentView === tab.id }">{{tab.name}}</div>
    </div>
    <div class="about-tab-box">
      <div
        @touchstart="changeStart"
        @touchmove="changeMove"
        @touchend="changeEnd"
        v-bind:class="[
          {shoe: currentBox === 1},
          {trouser: currentBox === 2},
          {jacket: currentBox === 3},
          'about-tab-container'
          ]">
        <div>
          <shoe></shoe>
        </div>
        <div>
          <trouser v-if="allFlag.trouser"></trouser>
        </div>
        <div>
          <jacket v-if="allFlag.jacket"></jacket>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Shoe from '../view/a.vue'
import Trouser from '../view/b.vue'
import Jacket from '../view/c.vue'
export default {
  components: {Shoe, Trouser, Jacket},
  data () {
    return {
      name: true,
      currentView: 1,
      currentBox: 1,
      allFlag: {
        trouser: false,
        jacket: false
      },
      touch: {
        time: 0,
        state: 0,
        current: 1
      },
      tabList: [
        {
          name: '鞋子',
          id: 1
        },
        {
          name: '裤子',
          id: 2
        },
        {
          name: '上衣',
          id: 3
        }
      ]
    }
  },
  created () {
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    change: function (id) {
      if (id !== this.currentView) {
        this.currentView = id
        this.currentBox = id
        if (id === 2) {
          if (!this.allFlag.trouser) {
            this.allFlag.trouser = true
          }
        }
        if (id === 3) {
          if (!this.allFlag.jacket) {
            this.allFlag.jacket = true
          }
        }
      }
    },
    changeStart: function (e) {
      e.preventDefault()
      this.touch.startX = e.touches[0].pageX
      this.touch.startY = e.touches[0].pageY
      var str = $(".about-tab-container").css('transform')
      str = str.substring(str.indexOf("(")+1, str.indexOf(")"))
      this.touch.translate = Math.floor(str.split(',')[4])
      this.touch.width = $(".about-tab-container").outerWidth()
      console.log(this.touch.time, this.touch.state)
    },
    changeMove: function (e) {
      e.preventDefault()
      this.touch.endX = e.touches[0].pageX
      this.touch.endY = e.touches[0].pageY
      var X = this.touch.endX - this.touch.startX
      var Y = this.touch.endY - this.touch.startY
      console.log(X, Y)
      if (this.touch.time === 0) {
        if ( Math.abs(X) > Math.abs(Y)) {
          this.touch.state = 1
          this.translateMove(X)
        }
        this.touch.time = 1
      }
      if (this.touch.time === 1) {
        if (this.touch.state === 1) {
          this.translateMove(X)
        }
      }
    },
    changeEnd: function (e) {
      e.preventDefault()
      this.touch.state = 0
      this.touch.time = 0
      this.currentBox = this.touch.current
      this.change(this.currentBox)
    },
    translateMove: function (x) {
      this.currentBox = null
      var moveX = this.touch.translate + x
      if (moveX > 0 ) {
        moveX = 0
      }
      if (moveX < (-this.touch.width * 2 / 3)) {
        moveX = -this.touch.width * 2 / 3
      }
      $(".about-tab-container").css({
        'transform': 'translateX('+ moveX +'px)'
      })
      if (Math.abs(x) > (this.touch.width / 6 + 20)) {
        if (x > 0) {
          this.touch.current = this.currentView - 1
        } else {
          this.touch.current = this.currentView + 1
        }
        if (this.touch.current < 1) {
          this.touch.current = 1
        }
        if (this.touch.current > 3) {
          this.touch.current = 3
        }
      } else {
        this.touch.current = this.currentView
      }
    }
  }
}
</script>
<style>
  .about-tab-box{
    position: absolute;
    top:80px;
    bottom:0;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
  }
  .about-tab-container{
    height: 100%;
    width: 300%;
    display: flex;
    flex-wrap: nowrap;
  }
  .about-tab-container>div{
    width:33.3333%;
    height: 100%;
    overflow-y: hidden;
    position: relative;
  }
  .about-tab-container.shoe{
    transform: translateX(0) !important;
    transition: transform 1s;
  }
  .about-tab-container.trouser{
    transform: translateX(-33.3333%) !important;
    transition: transform 1s;
  }
  .about-tab-container.jacket{
    transform: translateX(-66.6666%) !important;
    transition: transform 1s;
  }
</style>
