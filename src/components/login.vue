<template>
  <div>
    <form>
      <input type="text" placeholder="请输入账号" class="input-form">
      <input type="password" placeholder="请输入密码" class="input-form">
      <button class="btn" @click="sub">登录</button>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    sub: function () {
      debugger
      console.log(this.$router)
      window.sessionStorage.setItem('admin', '111')
      this.$router.replace({
        path: this.$route.query.redirect
      })
    }
  }
}
</script>
