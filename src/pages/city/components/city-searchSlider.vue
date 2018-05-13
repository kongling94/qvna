<template>
  <div class="sliderList">
      <ul>
          <li v-for="item in listAll" :key="item" @click="handleToList" :ref="item" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"city-searchSlider",
  props: ['sliderList'],
  data(){
      return{
          isStart:false,
          timer:null,
          startY:0
      }
  },
  updated () {
      this.startY = this.$refs['A'][0].offsetTop
  },
  computed:{
      listAll(){
          const lists=[];
          for (let i in this.sliderList) {
              if ( this.sliderList.hasOwnProperty(i) ) {
                 lists.push(i);
              }
          }
          return lists;
      }
  },
  methods:{
      handleToList(e){
         this.$emit('toList',e.target.innerText)
      },
      handleTouchStart(){
          this.isStart = true
      },
      handleTouchMove(e){
          if(this.isStart){
              if(this.timer){
                  clearTimeout(this.timer)
              }
             this.timer = setTimeout(() => {
                const moveY = e.touches[0].clientY - 86 ;
                const index = Math.floor((moveY - this.startY) / 19);
                if(index >= 0 && index < this.listAll.length){
                    this.$emit("toList",this.listAll[index])
                }
             }, 16);
          }
      },
      handleTouchEnd(){
          this.isStart=false;
      }
  }
}
</script>
<style lang="stylus" scoped>
@import '~C/basestylus.styl' 
    .sliderList
        position absolute
        height 100%
        display flex
        flex-direction column
        justify-content center
        top 1.76rem
        right 0
        z-index 10

        ul 
            border 1px solid #eee
            background-color #fff
            color $bgColor
            padding 0 .15rem 
            border-radius .15rem
            li
                padding .05rem 0
</style>

