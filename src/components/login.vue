<template>
  <div class="btn-box">
      <button class="btn full-btn" @click="sub">登录</button>
  </div>
</template>
<script>
export default {
  methods: {
    sub: function () {
      window.sessionStorage.setItem('admin', '111')
      this.$router.replace({
        path: this.$route.query.redirect
      })
    }
  }
}
</script>
<style>
  .full-btn{
    width:100%;
    background-color: #26a2ff;
    color: #fff;
    padding: 8px 20px;
    display: block;
    outline: none;
    border: 0;
    margin: 100px 0;
  }
  .btn-box{
    padding: 20px;
  }
</style>
