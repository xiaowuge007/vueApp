<template>
  <div class="tab-template-box">
    <h1>这里是文字</h1>
    <button @click="add">点击</button>
    <ul>
      <li v-if="flag">hello</li>
      <li class="lis">文字1111111111111111111111111111</li>
      <li class="lis">文字2</li>
      <li class="lis">文字3</li>
      <li class="lis">文字4</li>
      <li class="lis">文字5</li>
      <li class="lis">文字6</li>
      <li class="lis">文字7</li>
      <li class="lis">文字8</li>
      <li class="lis">文字9</li>
      <li class="lis">文字10</li>
      <li class="lis">文字11</li>
      <li class="lis">文字12</li>
      <li class="lis">文字13</li>
      <li class="lis">文字14</li>
      <li class="lis">文字15</li>
      <li class="lis">文字16</li>
      <li class="lis">文字17</li>
      <li class="lis">文字18</li>
      <li class="lis">文字19</li>
      <li class="lis">文字20</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 1,
      flag: false
    }
  },
  created () {
    console.log(this.num)
    this.num++
  },
  mounted () {
    console.log(this.num)
  },
  methods: {
    add: function () {
      this.flag = !this.flag
    }
  }
}
</script>
<style>
  .lis{
    height:40px;
    line-height: 40px;
    padding: 0 10px;
    list-style: none;
  }
</style>
