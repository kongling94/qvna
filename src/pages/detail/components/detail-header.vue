<template>
<div>
    <router-link to="/" tag="div" v-show="isShow">
        <div class="header-abs"><i class="iconfont">&#xe52f;</i></div>
    </router-link>

    <div class="header-fixed" v-show="!isShow" :style="opcatiyStyle">
      <router-link to="/" tag="div">
        <i class="iconfont back-icon">&#xe52f;返回</i>
      </router-link>
      景点详情
    </div>
</div>

</template>
<script>
export default {
    name:"detail-header",
    data(){
        return{
            isShow:true,
            opcatiyStyle:{
                opacity:0
            }
        }
    },
    methods:{
        showHeader(){
            var top = document.documentElement.scrollTop;
            if ( top > 60 ) {
                let opacity = top / 140 ;
                opacity= opacity > 1 ? 1 : opacity;
                this.opcatiyStyle={opacity}
                this.isShow=false;
            }else{
                this.isShow=true
            }

        },

    },
    activated(){
        window.addEventListener('scroll',this.showHeader)
    },
    deactivated(){
        window.removeEventListener('scroll',this.showHeader)
    }
}
</script>
<style lang="stylus" scoped>
 @import '~C/basestylus.styl'
    .header-abs
        position absolute
        top .2rem
        left .2rem
        width .76rem
        height .76rem
        border-radius 50%
        background-color:rgba(0,0,0,0.8)
        line-height:.76rem
        color:#fff
    .header-fixed
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        height .76rem
        line-height .76rem
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

