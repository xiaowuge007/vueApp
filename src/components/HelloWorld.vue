<template>
  <div class="hello">
    <div id="footer" v-if="$route.meta.navShow">
      <div><router-link to="/HelloWorld/home">home</router-link></div>
      <div><router-link to="/HelloWorld/about">about</router-link></div>
      <div><router-link to="/HelloWorld/mine">mine</router-link></div>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      flag: false
    }
  },
  methods: {
    show: function () {
      this.flag = true
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
  color: #f40;
}

#content{
  top:0;
  position: absolute;
  bottom:40px;
  width:100%;
  background-color: #eee;
}
#footer{
  height:40px;
  width:100%;
  position:absolute;
  display:flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  bottom:0;
  background-color: #42b983;
}
#footer>div{
  flex:1;
  text-align: center;
}
</style>
