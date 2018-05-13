<template>
<div>
    <div class="search">
      <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="content" ref="search" v-show="keyword">
      <ul>
          <li class="search-item" v-for="item in list" :key="item.id">{{item.name}}</li>
          <li class="search-item" v-show="hasListVlaue">未查询到匹配数据</li>
      </ul>
    </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:"city-Search",
    props:['cities'],
    data(){
        return{
            keyword:"",
            list:[],
            timer:null
        }
    },
    computed:{
        hasListVlaue(){
            return !this.list.length
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[];
                return;
            }
            this.timer=setTimeout(() => {
                const result =[];
                for (let key in this.cities) {
                        this.cities[key].forEach(value => {
                            if( value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                                result.push(value)
                            }
                        });
                }
                this.list=result;
            }, 50);
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.search);
    }
}
</script>
<style lang="stylus" scoped>
@import '~C/basestylus.styl' 
  .content
        position absolute
        top 1.72rem
        right 0
        left 0
        bottom 0
        z-index 11
        background-color #eee
        overflow hidden
        .search-item 
            line-height .62rem
            text-align left
            text-indent .3rem
            font-size .32rem
            color #666
            background-color #fff

  .search
        background-color $bgColor
        padding .1rem 0
      .search-input
        box-sizing border-box
        border-radius .1rem
        width 80%
        height .66rem
        padding 0 .1rem
        line-height .62rem
        text-indent .2rem
        color #666
</style>

