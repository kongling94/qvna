<template>
  <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
    name:"city-Search",
}
</script>
<style lang="stylus" scoped>
@import '~C/basestylus.styl' 
  .search
      background-color $bgColor
      padding .1rem 0
      .search-input
        box-sizing border-box
        border-radius .1rem
        width 80%
        height .66rem
        padding 0 .1rem
        line-height .62rem
        text-indent .2rem
        color #666
</style>

