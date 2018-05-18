<template>
    <div>
        <div class="banner" @click="handleClick" >
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="" srcset="">
            <div class="banner-info">
                <div class="info-title">故宫(AAAAA景区)</div>
                <div class="info-pic"><i class="iconfont">&#xe554; </i>10</div>
            </div>
        </div>  
        <gallary :imgs='imgs' v-show="gallary" @close="handleClose"></gallary>
    </div>
</template>
<script>
import gallary from '@/gallary/gallary'
export default {
    name:"detail-banner",
    data(){
        return{
            imgs:[{id:1001,src:'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg'},{id:1002,src:'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_r_800x800_5f03ad73.jpg'},{id:1003,src:'http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_r_800x800_7f96ccf9.jpg'}],
            gallary:false
        }
    },
    components:{
        gallary
    },
    methods:{
        handleClick(){
            this.gallary=true
        },
        handleClose(){
            this.gallary=false
        }
    }
}
</script>
<style lang="stylus" scoped>
    .banner 
        overflow hidden
        position relative
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            position absolute
            bottom 0
            left 0
            color #fff
            width 100%
            
            display flex
            .info-title
                flex 1
                font-size .36rem
                text-shadow 0 1px 2px rgba(0,0,0,0.70)
                line-height .4rem
                text-align left
                text-indent .2rem
            .info-pic 
                padding .05rem
                width 1.2rem
                height .4rem
                line-height .4rem
                background-color rgba(0,0,0,.5)
                border-radius .2rem
                margin-right .1rem
                margin-bottom .1rem

                
</style>

