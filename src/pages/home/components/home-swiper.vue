<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide  v-for="item of swiper" :key='item.id'>
        <img :src='item.imgUrl' class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "Home-Swiper",
    props:{
      swiper:Array
    },
    data(){
      return{
        imagesSrc:["http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg","http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg","http://img1.qunarzz.com/piao/fusion/1801/bd/04554e7c67650302.jpg_750x200_4293d60a.jpg","http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_750x200_b99b8e07.jpg","http://img1.qunarzz.com/piao/fusion/1804/e5/82b53c47166cfc02.jpg_750x200_0d3a0066.jpg","http://img1.qunarzz.com/piao/fusion/1805/3c/eefaaf2d84acad02.jpg_750x200_bffe03ce.jpg"],
        swiperOption:{
          pagination:{
            el:'.swiper-pagination'
          },
          loop:true
        }
      }
    }
  }

</script>

<style lang="stylus" scoped>

.wrapper >>> .swiper-pagination-bullet-active
      background-color:#fff
      
.wrapper
  // 这一层使用的是 图片的高 / 图片的宽 比值 将外层容器设置为w100% h0 配合padding将容器撑开到图片大小
  background-color: #f0f0f0
  overflow-x: hidden
  height: 0
  width: 100%
  padding-bottom: 30%
  .swiper-img
    max-width:100%;
    // max-height:100%;

</style>
