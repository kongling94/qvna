<template>
  <div class="youlike">
      <div class="youlike-title">
          <img :src="iconSrc" alt="" srcset="">
          <span>猜你喜欢</span>
          <!-- <a href="">全部榜单 <i class="iconfont">&#xe53a;</i></a> -->
      </div>
      <ul class="youlike-lists">
          <router-link :to="'/detail/'+ item.id" tag="li" class="item" v-for="item in youlike" :key='item.id'>
              <div class="item-img">
                  <img :src="item.imgUrl" :alt="item.title">   
              </div>
              <div class="item-info">
                  <p class="item-desc">{{item.title}}</p>
                  <div class="item-comment">
                      <div class="star">
                          <el-rate v-model="item.star" disabled  text-color="#ff9900" score-template="{value}">
                          </el-rate>
                      </div>
                      <span v-show="item.comment">{{item.comment}}条评论</span>
                  </div>
                  <div class="item-price">
                    <span class="price"><em>￥{{item.price}}</em>起</span>
                    <span class="address">￥{{item.address}}</span>
                  </div>
              </div>
          </router-link>
      </ul>
  </div>
</template>
<script>
export default {
    name:'Home-youLike',
    props:{
        youlike:Array
    },
    data(){
        return{
            iconSrc:'http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png',
            listData:[
                {
                    img:'http://img1.qunarzz.com/sight/p0/1804/43/4351334b2536a049a3.img.jpg_200x200_a3bc8fcb.jpg',
                    desc:'泉林山庄水上乐园',
                    star:4.5,
                    comment:'236',
                    address:'中山',
                    price:'35'
                },
                {
                    img:'http://img1.qunarzz.com/sight/p0/1804/57/570812106eff912ea3.img.jpg_200x200_1a581ad1.jpg',
                    desc:'中山长江水世界',
                    star:5,
                    comment:'1420',
                    address:'中山市区',
                    price:'29'
                },
                {
                    img:'http://img1.qunarzz.com/sight/p0/1603/d6/d6c26678b2f50ecd90.water.jpg_200x200_0076058f.jpg',
                    desc:'中山温泉',
                    star:5,
                    comment:'1424',
                    address:'中山市区',
                    price:'111'
                },
                {
                    img:'http://img1.qunarzz.com/sight/p0/201403/07/228c4f111a52f45c3c69937813f384ae.jpg_200x200_3f7c6ca8.jpg',
                    desc:'中山影视城',
                    star:4.8,
                    comment:'323',
                    address:'中山市区',
                    price:'60'
                },
                {
                    img:'http://img1.qunarzz.com/sight/p0/201301/05/db9006595b383ea193835fbb.png_200x200_8e9e8fb7.png',
                    desc:'泉林山庄',
                    star:5,
                    comment:'311',
                    address:'泉林山庄',
                    price:'35'
                },
                {
                    img:'http://img1.qunarzz.com/sight/p0/1505/8a/8ad61229c69e6bb6.water.jpg_200x200_d12baed5.jpg',
                    desc:'泉眼温泉',
                    star:5,
                    comment:'1633',
                    address:'中山市区',
                    price:'94.8'
                },
                {
                    img:'http://img1.qunarzz.com/sight/p0/201211/01/81738f772a92c4b593835fbb.jpg_200x200_3f4d7a3c.jpg',
                    desc:'詹园',
                    star:5,
                    comment:'1370',
                    address:'中山市区',
                    price:'26'
                },
                {
                    img:'http://img1.qunarzz.com/sight/p0/1612/b4/b49db86b8afe854ba3.water.jpg_200x200_6496abf9.jpg',
                    desc:'伟丰生态农场',
                    star:4,
                    comment:'46',
                    address:'中山',
                    price:'16'
                },
                {
                    img:'http://img1.qunarzz.com/sight/p0/201403/07/2e6fcfb30fa65c7cd4b91d773342377e.jpg_200x200_4f9f1a8a.jpg',
                    desc:'仙踪龙园',
                    star:4,
                    comment:'189',
                    address:'中山',
                    price:'37'
                },
                {
                    img:'http://img1.qunarzz.com/sight/p0/201407/07/e3a1f5b2b13999a9bb5fd401f40a4630.jpg_200x200_8ffee24b.jpg',
                    desc:'幻彩摩天轮',
                    star:5,
                    comment:'1270',
                    address:'石岐区',
                    price:'29.7'
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>

    .youlike
        margin-top .1rem
        .youlike-title
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
        .youlike-lists
            margin-left .12rem
            .item >>> img 
                width 100%
            .item    
                position relative
                padding .2rem 0
                overflow hidden
                border-bottom 1px solid #ccc
                .item-img
                    float left
                    width 2rem 
                    height 2rem
                    margin-right .12rem
                .item-info
                    overflow hidden
                    text-align left
                    .item-desc
                        margin-top .26rem
                        height .44rem
                        color #000
                        line-height .44rem
                        font-size .32rem  
                    .item-comment
                        margin-top .14rem
                        height .34rem
                        .star
                            display inline-block
                        .star >>> .el-rate__icon
                                font-size .16rem
                        span 
                            display inline-block    
                    .item-price
                        position relative
                        margin-top .22rem           
                        color #616161
                        font-size .24rem
                        line-height .4rem
                        em
                            font-size .4rem
                            color #ff8300
                        .address
                            position absolute
                            right .2rem
                            top .12rem    
</style>
