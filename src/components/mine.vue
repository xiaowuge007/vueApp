<template>
  <div class="one">
    <mt-header fixed title="我的">
      <mt-button icon="aicon-plus-sign " slot="right"></mt-button>
      <mt-button @click="back" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div id="wrapper">
      <div class="scroll">
        <div id="pullDown">
          <div class="pullDownAble">
            <span class="pullDownIcon"><i class="icon-arrow-down"></i></span>
            <span class="pullDownText">下拉刷新</span>
          </div>
        </div>
        <ul id="list-group">
          <li class="list-item">列表1<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表2<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表3<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表4<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表5<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表6<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表7<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表8<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表9<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表10<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表11<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表12<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表13<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表14<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表15<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表16<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表17<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表18<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表19<span><i class="icon-chevron-right"></i></span></li>
          <li class="list-item">列表20<span><i class="icon-chevron-right"></i></span></li>
        </ul>
        <div id="pullUp">
          <div class="pullUpAble">
            <span class="pullUpIcon"><i class="icon-arrow-up"></i></span>
            <span class="pullUpText">上拉加载</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../plugins/iscroll-probe'
export default {
  data () {
    return {
      name: true,
      scroll: null,
      pullDownNum: 1,
      pullUpNum: 1,
      loadingState: 0,
      pullDown: false,
      pullUp: false
    }
  },
  created () {
    var self = this
  },
  mounted () {
    var self = this
    this.scroll = new IScroll('#wrapper', {
      scrollbars: true,
      mouseWheel: false,
      interactiveScrollbars: true,
      shrinkScrollbars: 'scale',
      fadeScrollbars: true,
      probeType: 2,
      bindToWrapper: true
    })
    this.scroll.on('scroll', function () {
      if (self.loadingState !== 2) {
        if (this.y > 0) {
          $(".pullDownAble").css({
            'height': this.y + 'px'
          })
          if (this.y > 50 ) {
            $(".pullDownAble").css('height', '50px')
            $(".pullDownAble .pullDownText").text('松手刷新')
            $(".pullDownAble .pullDownIcon").addClass('flip')
            self.pullDown = true
            self.loadingState = 1
          } else {
            self.pullDown = false
            self.loadingState = 0
            $(".pullDownAble .pullDownText").text('下拉刷新')
            $(".pullDownAble .pullDownIcon").removeClass('flip')
          }
        }
        if (this.maxScrollY - this.y > 0) {
          $(".pullUpAble").css({
            'height': this.maxScrollY - this.y + 'px'
          })
          if (this.maxScrollY - this.y > 50 ) {
            $(".pullUpAble").css('height', '50px')
            $(".pullUpAble .pullUpText").text('松手加载')
            $(".pullUpAble .pullUpIcon").addClass('flip')
            self.pullUp = true
            self.loadingState = 1
          } else {
            self.pullDown = false
            self.loadingState = 0
            $(".pullUpAble .pullUpText").text('上拉加载')
            $(".pullUpAble .pullUpIcon").removeClass('flip')
          }
        }
      }
    })
    this.scroll.on('scrollEnd', function () {
      if (self.loadingState === 1) {
        if (self.pullDown) {
          $(".pullDownAble .pullDownText").text('正在刷新。。。。')
          $(".pullDownAble i").removeClass('icon-arrow-down').addClass('icon-spinner')
          $(".pullDownAble .pullDownIcon").removeClass('flip').addClass('loading')
          self.loadingState = 2
          self.pullDownList()
        }
        if (self.pullUp) {
          $(".pullUpAble .pullUpText").text('正在加载。。。。')
          $(".pullUpAble i").removeClass('icon-arrow-up').addClass('icon-spinner')
          $(".pullUpAble .pullUpIcon").removeClass('flip').addClass('loading')
          self.loadingState = 2
          self.scroll.refresh()
          self.scroll.scrollTo(0, self.scroll.maxScrollY)
          self.pullUpList()
        }
      } else {
        $(".pullUpAble").animate({'height': '0px'}, 100)
        $(".pullDownAble").animate({'height': '0px'}, 100)
      }
    })

  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    pullDownList: function () {
      var self = this
      setTimeout(function () {
        var maxNum = self.pullDownNum + 10
        for (self.pullDownNum; self.pullDownNum < maxNum; self.pullDownNum++) {
          $("#list-group").prepend('<li class="list-item">新增列表' + self.pullDownNum + '<span><i class="icon-chevron-right"></i></span></li>')
        }
        if (self.scroll) {
          $(".pullDownAble .pullDownText").text('下拉刷新')
          $(".pullDownAble").css('height', '0px')
          $(".pullDownAble .pullDownIcon").removeClass('loading')
          $(".pullDownAble i").addClass('icon-arrow-down').removeClass('icon-spinner')
          self.scroll.refresh()
          self.pullDown = false
          self.loadingState = 0
        }
      }, 3000)
    },
    pullUpList: function () {
      var self = this
      setTimeout(function () {
        var maxNum = self.pullUpNum + 10
        for (self.pullUpNum; self.pullUpNum < maxNum; self.pullUpNum++) {
          $("#list-group").append('<li class="list-item">更多列表' + self.pullUpNum + '<span><i class="icon-chevron-right"></i></span></li>')
        }
        if (self.scroll) {
          $(".pullUpAble .pullUpText").text('上拉加载')
          $(".pullUpAble").css('height', '0px')
          $(".pullUpAble .pullUpIcon").removeClass('loading')
          $(".pullUpAble i").addClass('icon-arrow-up').removeClass('icon-spinner')
          self.scroll.refresh()
          self.pullUp = false
          self.loadingState = 0
        }
      }, 3000)
    }
  }
}
</script>
<style>
  #wrapper{
    position: absolute;
    bottom:0px;
    width:100%;
    top:40px;
    overflow: hidden;
  }
  .scroll{
    position: absolute;
    background-color: #fff;
    width: 100%;
  }
  .list-item>span{
    float: right;
    width:40px;
    height:40px;
  }
  #pullDown,#pullUp{
    text-align: center;
    background-color: #eee;
  }
  .pullUpAble,.pullDownAble{
    line-height: 40px;
    height: 0px;
    overflow: hidden;
  }
  .pullDownAble>span,.pullUpAble>span{
    margin: 0 5px;
  }
  .pullDownAble .pullDownIcon,.pullUpAble .pullUpIcon{
    display: inline-block;
    transition: transform 500ms;
    -moz-transition: transform 500ms;
    -webkit-transition: transform 500ms;
    -o-transition: transform 500ms;
    transform:rotate(0deg);
    -ms-transform:rotate(0deg);
    -moz-transform:rotate(0deg);
    -webkit-transform:rotate(0deg);
    -o-transform:rotate(0deg);
  }
  .pullDownAble .pullDownIcon.flip,.pullUpAble .pullUpIcon.flip{
    transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -webkit-transform:rotate(180deg);
    -o-transform:rotate(180deg);
  }
  .pullDownAble .pullDownIcon.loading,.pullUpAble .pullUpIcon.loading {
    animation: loading  2s infinite linear;
  }
</style>
