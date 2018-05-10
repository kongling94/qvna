<template>
  <div class="icons">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pagesComputed" :key='index'> 
            <div class="icon" v-for="(item,index) in page" :key='index'>
                <div class="icon-img">
                    <img class="img-block" :src="item.src" alt="item.title" >
                </div>
                <p class="icon-text">{{item.title}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div> 
    </swiper>
  </div>
</template>
<script>
  export default {
    name: "Home-Icons",
    data() {
      return {
        imgSrc: [{
            src: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            title: '景点门票'
          },
          {
            src: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
            title: '温泉'
          },
          {
            src: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
            title: '水上玩乐'
          },
          {
            src: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
            title: '摩天轮'
          },
          {
            src: 'http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png',
            title: '农家度假'
          },
          {
            src: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            title: '游乐场'
          },
          {
            src: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
            title: '游船游艇'
          },
          {
            src: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
            title: '自然风光'
          },
          {
            src:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            title:'亲子游'
          },
          {
            src:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
            title:'全部玩乐'
          }
        ],
        swiperOption:{
          pagination:{
            el:'.swiper-pagination'
          },
          autoplay: false,
          loop:false
        }
      }
    },
    computed:{
        pagesComputed () {
            const pages = [];
            this.imgSrc.forEach((item,index)=>{
                const page = Math.floor(index / 8);
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item);
            })
             return pages;
        }
    }
  }

</script>
<style lang="stylus" scoped>
  @import '~C/basestylus.styl' 
  @import '~C/mixin.styl' 

  .icons >>> .swiper-container
        height 0 
        padding-bottom 55% 
        background-color #f6f6f6
        .icon 
            position relative 
            overflow hidden
            float left 
            width 25% 
            height 0 
            padding-bottom 25%
            .icon-text 
                position absolute 
                left 0 
                right 0 
                bottom 0 
                height .7rem 
                line-height .7rem 
                color $textColor 
                text-align center
                ellipsis()
            .icon-img 
                position absolute 
                top 0 
                left 0 
                right 0 
                bottom .4rem 
                box-sizing border-box 
                padding .3rem 
                .img-block
                    height 100% 
                    display block 
                    margin 0 auto

</style>
