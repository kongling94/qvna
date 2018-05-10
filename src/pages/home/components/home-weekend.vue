<template>
  <div class="weekend">
      <div class="youlike-title">
          <span>周末去哪</span>
          <!-- <a href="">全部榜单 <i class="iconfont">&#xe53a;</i></a> -->
      </div>
      <ul class="youlike-lists">
          <li class="item" v-for="(item,index) in listData" :key='index'>
              <div class="item-img">
                  <img :src="item.img" :alt="item.desc">   
              </div>
              <div class="item-info">
                  <p class="item-desc">{{item.desc}}</p>
                  <p class="item-info">{{item.info}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
    name:'Home-weekend',
    data(){
        return{
            iconSrc:'http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png',
            listData:[
                {
                    img:'http://img1.qunarzz.com/sight/source/1505/3c/96128de07fdd2f.jpg_r_640x214_4505bca3.jpg',
                    desc:'中山必游TOP10',
                    info:'国父故乡，革命起源地'
                },
                {
                    img:'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
                    desc:'欢乐长隆',                    
                    info:'世界欢乐汇聚长隆'
                },
                {
                    img:'http://img1.qunarzz.com/sight/source/1507/9d/fe134bf7b158b5.jpg_r_640x214_c1c853fe.jpg',
                    desc:'你不知道的中山',
                    info:'中山，比你想象得精彩'
                },
                {
                    img:'http://img1.qunarzz.com/sight/source/1511/f7/90c1c5f6f3dd59.jpg_r_640x214_3cb4974e.jpg',
                    desc:'河源必游TOP10',
                    info:'走进客家古邑，感受万绿河源'
                },
                {
                    img:'http://img1.qunarzz.com/sight/source/1506/45/313877f3917dbe.jpg_r_640x214_1c113e46.jpg',
                    desc:'江门必游TOP10',
                    info:'你不可错过的休闲度假之地'
                }
            ]
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
