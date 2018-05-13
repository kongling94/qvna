<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="iconList">
        <swiper-slide v-for="(page,index) in pagesComputed" :key='index'> 
            <div class="icon" v-for="item in page" :key='item.id'>
                <div class="icon-img">
                    <img class="img-block" :src="item.imgUrl" alt="item.title" >
                </div>
                <p class="icon-text">{{item.desc}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div> 
    </swiper>
  </div>
</template>
<script>
  export default {
    name: "Home-Icons",
    props:["iconList"],
    data() {
      return {
        dataList:"",
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
            this.iconList.forEach((item,index)=>{
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
        padding-bottom 52% 
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
                bottom .3rem 
                box-sizing border-box 
                padding .4rem 
                .img-block
                    height 100% 
                    display block 
                    margin 0 auto

</style>
