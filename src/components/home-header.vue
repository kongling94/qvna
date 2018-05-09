<template>
  <div class="header">
      <div class="header-left"><i class="iconfont">&#xe52f;</i></div>
      <div class="header-input"><i class="iconfont search">&#xe540;</i>输入城市/景点/主题</div>
      <div class="header-right">城市<i class="iconfont location">&#xe546;</i></div>
  </div>
</template>

<script>
export default {
  name:"HomeHeader"
}
</script>

<style lang="stylus" scoped>
    @import '~C/basestylus.styl'
   
    .header
        background-color:$bgColor
        display:flex
        height:.86rem
        line-height:.86rem
        color:#fff
        .header-left
            width:.64rem
            float:left
        .header-right
            width:1.24rem
            float:right
            .location
                padding-left:.1rem
        .header-input
            flex:1    
            height:0.64rem
            line-height:.64rem
            border-radius:.1rem
            background-color:#fff
            color:rgba(0,0,0,.5)
            margin-top:.12rem 
            margin-left:.1rem 
            margin-right:.1rem  
            .search 
                padding-right:.1rem
</style>
