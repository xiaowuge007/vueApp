<template>
  <div class="hello">
    <div id="footer" v-if="$route.meta.navShow">
      <div><router-link to="/HelloWorld/home"><i class="icon-home"></i><span>home</span></router-link></div>
      <div><router-link to="/HelloWorld/about"><i class="icon-globe"></i><span>about</span></router-link></div>
      <div><router-link to="/HelloWorld/mine"><i class="icon-user"></i><span>mine</span></router-link></div>
    </div>
    <div id="content">
      <button @click="get" style=" padding: 10px;position: fixed;bottom: 0;right: 0;z-index: 9999;">获取</button>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      flag: false
    }
  },
  mounted () {
    /*document.addEventListener("backbutton", this.onBackKeyDown, false)*/
  },
  methods: {
    show: function () {
      this.flag = true
    },
    get () {
      console.log(this.$route)
    },
    onBackKeyDown () {
      if (this.$route.name === 'home') {
        Toast({
          message: '再点击一次退出！',
          duration: 3000
        })
        let self = this
        document.removeEventListener("backbutton", this.onBackKeyDown, false)
        document.addEventListener("backbutton", this.exitApp, false)
        this.timer = window.setInterval(function () {
          window.clearInterval(self.timer)
          document.removeEventListener("backbutton", self.exitApp, false)
          document.addEventListener("backbutton", self.onBackKeyDown, false)
        }, 3000)
      } else {
        this.$router.go(-1)
      }
    },
    exitApp () {
      if (this.$route.name === 'home') {
        window.navigator.app.exitApp()
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
}

#content{
  top:0;
  position: absolute;
  bottom:40px;
  width:100%;
  background-color: #eee;
  overflow: hidden;
}
#footer{
  height:40px;
  width:100%;
  position:absolute;
  display:flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  bottom:0;
  background-color: #26a2ff;
  z-index: 9999;
}
#footer>div{
  flex:1;
  text-align: center;
}
#footer>div>a{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
}
</style>
