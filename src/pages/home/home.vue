<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiper="data.swiperList"></home-swiper>
    <home-icons :iconList="data.iconList"></home-icons>
    <home-hot></home-hot>  
    <home-youLike :youlike="data.recommendList"></home-youLike>
    <home-weekend :weekendList="data.weekendList"></home-weekend>
  </div>
   
</template>

<script>
import homeHeader from './components/home-header'
import homeSwiper from './components/home-swiper'
import homeIcons from './components/home-icons'
import homeHot from './components/home-hot'
import homeYouLike from './components/home-youLike'
import homeWeekend from './components/home-weekend'
import { mapState } from 'vuex'
import axios from 'axios'
  export default {
    name: 'Home',
    data() {
      return {
        lastCity:'',
        data:{}
      }
    },
    components:{
      homeHeader,
      homeSwiper,
      homeIcons,
      homeHot,
      homeYouLike,
      homeWeekend
    },
    computed:{
      ...mapState(['city'])
    },
    mounted(){
      this.lastCity=this.city
      this.getHomeData();
    },
    activated(){
      if(this.lastCity !== this.city){
        this.lastCity=this.city
        this.getHomeData()
      }
    },
    methods:{
      getHomeData(){
        axios.get('/api/index.json?city='+this.city)
        .then(this.getHomeDataSuccess) 
      },
      getHomeDataSuccess(res){
        res=res.data;
        if(res.ret && res.data){
            const data=res.data;
            this.data=data; 
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
