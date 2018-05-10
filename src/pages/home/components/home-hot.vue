<template>
  <div class="hot">
      <div class="hot-title">
          <img :src="iconSrc" alt="" srcset="">
          <span>本周热门榜单</span>
          <a href="">全部榜单 <i class="iconfont">&#xe53a;</i></a>
      </div>
      <ul class="hot-lists">
          <li class="list" v-for="(list,index) in lists" :key="index">
              <a class="list-inner" href="">
                  <div class="hot-tag" v-show='list.tag'><img :src="list.tag" alt=""></div>
                  <div class="hot-img">
                      <img :src="list.img" :alt="list.desc">
                  </div>
                  <div class="hot-desc">
                      {{list.desc}}
                  </div>
                  <div class="hot-price">
                      <span>￥{{list.price}}</span>起
                  </div>
              </a>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"Home-hot",
  data(){
      return{
          iconSrc:'http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png',
          lists:[
              {
                  tag:'http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png',
                  img:'http://img1.qunarzz.com/sight/p0/1709/f0/f03836fc155164aaa3.img.jpg_150x150_c96cecff.jpg',
                  desc:'中山市三角镇迪茵湖休闲生态旅游度假区',
                  price:'66'
              },
               {
                  tag:'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png',
                  img:'http://img1.qunarzz.com/sight/p0/1505/8a/8ad61229c69e6bb6.water.jpg_150x150_54df07f3.jpg',
                  desc:'泉眼温泉',
                  price:'94.8'
              },
               {
                  tag:'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png',
                  img:'http://img1.qunarzz.com/sight/p0/201211/01/81738f772a92c4b593835fbb.jpg_150x150_5374a29c.jpg',
                  desc:'詹园',
                  price:'26'
              },
               {
                  tag:'',
                  img:'http://img1.qunarzz.com/sight/p0/201407/07/e3a1f5b2b13999a9bb5fd401f40a4630.jpg_150x150_84a0cff3.jpg',
                  desc:'幻彩摩天轮',
                  price:'29.7'
              },
               {
                  tag:'',
                  img:'http://img1.qunarzz.com/sight/p0/1603/d6/d6c26678b2f50ecd90.water.jpg_150x150_bc155db7.jpg',
                  desc:'中山温泉',
                  price:'111'
              },
               {
                  tag:'',
                  img:'http://img1.qunarzz.com/sight/p75/201211/02/5defd9d064634a2b93835fbb.jpg_150x150_b403ba0f.jpg',
                  desc:'紫马岭公园',
                  price:'15'
              },
               {
                  tag:'',
                  img:'http://img1.qunarzz.com/sight/p0/1802/a7/a751b145f9b4e0dba3.img.jpg_150x150_c180c9a3.jpg',
                  desc:'中山德华湿地花海',
                  price:'33.5'
              },
               {
                  tag:'',
                  img:'http://img1.qunarzz.com/sight/p0/201403/07/228c4f111a52f45c3c69937813f384ae.jpg_150x150_11cdd082.jpg',
                  desc:'中山影视城',
                  price:'60'
              },
               {
                  tag:'',
                  img:'http://img1.qunarzz.com/sight/p0/1503/e8/e8034a1f50ad8728.img.png_150x150_a99b6c8a.png',
                  desc:'旭景农业科技园',
                  price:'24.8'
              },
               {
                  tag:'',
                  img:'http://img1.qunarzz.com/sight/p0/201403/07/f52884e092cdd5c808c2e9bd226c0c0f.jpg_150x150_9aa713a3.jpg',
                  desc:'金斗湾怡乐园',
                  price:'30'
              }
          ]
      }
  }
}
</script>
<style lang="stylus" scoped>
@import '~C/mixin.styl' 
    .hot
        margin-top .1rem
        .hot-title
            position relative
            padding .1rem
            text-align left 
            border-bottom 1px solid #dcdcdc  
            img 
                display inline-block
                width .3rem
                height .3rem
                overflow hidden
                vertical-align top
            span 
                display inline-block
                height .44rem
                line-height .44rem
                font-size .32rem
                color #000
            a 
                position absolute
                right .2rem
                top .24rem
                font-size .24rem
                color #616161
                i 
                    font-size .24rem
        .hot-lists
            margin-top .1rem
            padding 0 .24rem
            overflow-x scroll
            white-space nowrap
            .list >>> img 
                width 100%
            .list    
                position relative
                display inline-block
                width 2rem
                padding .06rem 0 .2rem
                &:not(:first-child)
                    margin-left .12rem
                .list-inner
                    width 100%
                    height 100%                    
                    .hot-tag 
                        position absolute
                        top 0
                        left 0
                        width .8rem
                        // height 50%

                    .hot-img 
                        width 100%
                        height 0
                        padding-bottom 100%
                    .hot-desc,.hot-price
                        margin-top .12rem
                        color #000
                        font-size .24rem
                        line-height .32rem
                        ellipsis()
                    .hot-price
                        span
                            color #ff8300
                            font-size .28rem    
                       



                

</style>
