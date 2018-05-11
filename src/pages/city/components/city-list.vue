<template>
  <div class="list" ref="wrapper">
      <div class="list-content">
        <div class="area">
            <div class="title">当前城市</div>  
            <div class="btn-list">
                <div class="btn-wrapper">
                    <div class="btn">中山</div>
                </div>
            </div>      
        </div> 
        <div class="area">
            <div class="title">热门城市</div>
            <div class="btn-list">
                <div class="btn-wrapper">
                    <div class="btn">北京</div>
                </div>
                <div class="btn-wrapper">
                    <div class="btn">杭州</div>
                </div>
                <div class="btn-wrapper">
                    <div class="btn">广州</div>
                </div>
                <div class="btn-wrapper">
                    <div class="btn">上海</div>
                </div>
                <div class="btn-wrapper">
                    <div class="btn">深圳</div>
                </div>
            </div>           
        </div> 
        <div class="area">
            <div class="title">A</div>
            <div class="btn-list item-list">
                <div class="btn-wrapper item">
                    <div class="btn">北京</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">杭州</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">广州</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">上海</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">深圳</div>
                </div>
            </div>           
        </div> 
        <div class="area">
            <div class="title">B</div>
            <div class="btn-list item-list">
                <div class="btn-wrapper item">
                    <div class="btn">北京</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">杭州</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">广州</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">上海</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">深圳</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">北京</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">杭州</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">广州</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">上海</div>
                </div>
                <div class="btn-wrapper item">
                    <div class="btn">深圳</div>
                </div>
            </div>         
        </div> 
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
    name:'city-List',
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>
<style lang="stylus" scoped>
@import "~C/basestylus"
.list
    // padding .12rem 0
    position absolute
    top 1.76rem
    left 0
    right 0
    bottom 0
    overflow hidden
   
    .area
        .title
            height .4rem
            padding .1rem 0
            line-height .4rem
            text-align left
            text-indent .32rem
            color #666
            font-size .26rem
            background-color #eee
        
        .btn-list 
            padding .1rem
            overflow hidden
            .btn-wrapper 
                float left
                width 33.33%
                .btn
                    // text-align left
                    // background-color #fff
                    margin .1rem
                    padding .1rem 0
                    border .02rem solid #ccc   
                    border-radius .06rem
            // border-top 1px solid #000
        .item-list
            .item
                float auto
                width 100%
                // margin .1rem 0
                text-align left
                text-indent .3rem
                &:not(:first-child) 
                    border-top 1px solid #ccc
                .btn
                    border none   

</style>


