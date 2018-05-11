<template>
  <div class="weekend">
      <div class="youlike-title">
          <span>周末去哪</span>
          <!-- <a href="">全部榜单 <i class="iconfont">&#xe53a;</i></a> -->
      </div>
      <ul class="youlike-lists">
          <li class="item" v-for="item in weekendList" :key='item.id'>
              <div class="item-img">
                  <img :src="item.imgUrl" :alt="item.desc">   
              </div>
              <div class="item-info">
                  <p class="item-desc">{{item.title}}</p>
                  <p class="item-info">{{item.desc}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
    name:'Home-weekend',
    props:{
        weekendList:Array
    },
    data(){
        return{
            iconSrc:'http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png',
        }
    }
}
</script>
<style lang="stylus" scoped>
    .weekend
        // margin-top .1rem
       
        .youlike-title
            position relative
            padding .1rem
            text-align left 
            background-color #f5f5f5
            span 
                display inline-block
                height .5rem
                line-height .5rem
                font-size .32rem
                color #212121
        .youlike-lists
            margin-left .12rem
            .item >>> img 
                width 100%
            .item    
                position relative
                padding .2rem 0
                overflow hidden
                
                // border-bottom 1px solid #ccc
                .item-img
                    width 100%
                .item-info
                    overflow hidden
                    text-align left
                    .item-desc,.item-info
                        padding-left .16rem
                        margin-top .1rem
                        height .44rem
                        color #000
                        line-height .44rem
                        font-size .32rem  
                    .item-info
                        margin-top .05rem
                        height .34rem
                        color #616161
                        line-height .34rem
                        font-size .24rem  
</style>
