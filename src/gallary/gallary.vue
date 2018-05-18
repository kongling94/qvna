<template>
    <div class="gallary" @click="handleClickGallary">
        <div class="wrap">
            <swiper :options="swiperOption" >
                <swiper-slide v-for="item of imgs" :key="item.id"> 
                   <img class="gallary-img" :src="item.src" alt="item.title" >
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div> 
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
  name: "gallary",
  props:{
      imgs:Array
  },
  data(){
      return {
          swiperOption:{
            observer:true,
            observeParents:true,
          pagination:{
            el:'.swiper-pagination',
            type:'fraction'
          },
          autoplay: false,
          loop:false
        }
      }
  },
  methods:{
      handleClickGallary(){
          this.$emit('close')
      }
  }
};
</script>
<style lang="stylus" scoped>
.gallary >>> .swiper-container
    overflow inherit 
    
.gallary 
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: #000;
    .wrap 
        width 100%
        height 0
        // overflow hidden
        padding-bottom 100%
        .gallary-img
            width 100%;
        .swiper-pagination-fraction 
            color #fff
            bottom -5rem
            
    

</style>
