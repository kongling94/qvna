<template>
  <div class="sliderList">
      <ul>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"city-searchSlider",
}
</script>
<style lang="stylus" scoped>
@import '~C/basestylus.styl' 
    .sliderList
        position absolute
        height 100%
        display flex
        flex-direction column
        justify-content center
        top 1.76rem
        right .2rem
        z-index 10

        ul 
            border 1px solid #eee
            background-color #fff
            color $bgColor
            padding 0 .15rem 
            border-radius .15rem
            li
                padding .05rem 0
</style>

