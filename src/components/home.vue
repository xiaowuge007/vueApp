<template>
  <div class="one">
    <mt-header fixed title="首页">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--<div class="m-tab-bar">
      <div @click="change(tab.id)" v-for="tab in tabList" v-bind:class="{ active: currentView === tab.id }">{{tab.name}}</div>
    </div>
    <div class="home-tab-box">
     &lt;!&ndash; <transition name="fade">
        <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
      </transition>&ndash;&gt;
    </div>-->
    <!--<div id="home">
      <div>
        <mt-loadmore :autoFill="false" :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore">
          <ul>
            <li v-for="li in list">
              {{li}}
            </li>
          </ul>
        </mt-loadmore>
      </div>
    </div>-->
    <div id="mescroll" class="mescroll">
      <!--展示上拉加载的数据列表-->
      <ul id="dataList" class="data-list">
        <li v-for="pd in list" :key="pd">
         {{pd}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Header, Loadmore } from 'mint-ui'
import Vid from '../view/video.vue'
import Pic from '../view/pic.vue'
import Word from '../view/word.vue'
import '../plugins/mescroll'
export default {
  components: {
    'vid': Vid,
    'pic': Pic,
    'word': Word,
    Header
  },
  data () {
    return {
      name: true,
      num: 0,
      value: '',
      currentView: 'pic',
      tabList: [
        {
          name: '视频',
          id: 'vid'
        },
        {
          name: '图片',
          id: 'pic'
        },
        {
          name: '文字',
          id: 'word'
        }
      ],
      upNUm: 1,
      loadNUM: 1,
      timer: null,
      scroll: null,
      list: [
        '列表1',
        '列表2',
        '列表3',
        '列表4',
        '列表5'
      ]
    }
  },
  activated () {
  },
  mounted (){
    let self = this
    /*this.scroll = new window.MeScroll("mescroll", {
      up: {
        callback: self.upCallback,
        isBounce: false
      }
    })*/
  },
  methods: {
    change: function (id) {
      if (this.currentView !== id) {
        this.currentView = id
      }
    },
    upCallback () {
      let self = this
      setTimeout(function () {
        var i = self.upNUm
        for (i; i < 5 + self.upNUm; i++) {
          self.list.unshift('新增列表' + i)
        }
        self.upNUm = i
        self.scroll.endSuccess()
      }, 2000)
    },
    loadBottom () {
      let self = this
      setTimeout(function () {
        var i = self.loadNUM
        for (i; i < 5 + self.loadNUM; i++) {
          self.list.push('更多列表' + i)
        }
        self.loadNUM = i
        self.$refs.loadmore.onBottomLoaded()
        self.scroll.refresh()
      }, 2000)
    }
  }
}
</script>
<style scoped>
  @import "../plugins/mescroll.css";
li{
  height: 40px;
  line-height: 40px;
  padding-left: 16px;
  border-bottom: 1px solid #ccc;
}
#home{
  position: absolute;
  top: 40px;
  width: 100%;
  bottom: 0;
  overflow: hidden;
}
.range{
  position: relative;
  display: block;
  height: 20px;
  width: 100%;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0,#b9b9b9),color-stop(100%,#b9b9b9));
  background: -webkit-linear-gradient(left,#b9b9b9,#b9b9b9);
  background: linear-gradient(90deg,#b9b9b9 0,#b9b9b9);
  background-position: 50%;
  background-size: 100% 2px;
  background-repeat: no-repeat;
  outline: 0;
}
input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance: none;
  border-radius:50%;
  width:20px;
  height:20px;
  background: #f00;
}
.m-tab-bar{
  display: flex;
  flex-wrap: nowrap;
  width:100%;
  position: absolute;
  height:40px;
  top: 40px;
  line-height: 40px;
}
.m-tab-bar>div{
  flex:1;
  text-align: center;
}
.m-tab-bar>div.active{
  border-bottom:1px solid #f40;
  color:#f40;
}
.home-tab-box{
  position: absolute;
  width:100%;
  top: 80px;
  bottom:0px;
  overflow: hidden;
  background-color: #fff;
}
.fade-enter-to {
  animation: enter 1s;
}
.fade-leave-to {
  animation: leave 1s;
}
@keyframes enter {
  0%{
    transform: translateX(100%)
  }
  100%{
    transform: translateX(0)
  }
}
@keyframes leave {
  0%{
    transform: translateX(0)
  }
  100%{
    transform: translateX(-100%)
  }
}
</style>
