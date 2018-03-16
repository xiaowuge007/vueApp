<template>
  <div class="one">
    <div id="header"></div>
    <h1 v-if="!name">这里是mine页面</h1>
    <h2 v-if="name">正在加载。。。。。。</h2>
    <button @click="back">后退</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: true
    }
  },
  created () {
    var self = this
    setTimeout(function () {
      self.name = false
    }, 3000)
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>
