<template>
  <div class="header">
      <router-link to="/">
        <i class="iconfont back-icon">&#xe52f;返回</i>
      </router-link>
      城市选择
  </div>
</template>
<script>
export default {
    name:"city-Header",
}
</script>
<style lang="stylus" scoped>
@import '~C/basestylus.styl' 
.header
    position relative
    height .86rem
    line-height .86rem
    overflow hidden
    color #fff
    background-color $bgColor
    font-size .32rem
    .back-icon
        position absolute
        top 0
        left .12rem
        width auto
        font-size .32rem
        color #fff
</style>
