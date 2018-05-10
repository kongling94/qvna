<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiper="data.swiperList"></home-swiper>
    <home-icons ></home-icons>
    <home-hot></home-hot>  
    <home-youLike ></home-youLike>
    <home-weekend ></home-weekend>
  </div>
   
</template>

<script>
import homeHeader from './components/home-header'
import homeSwiper from './components/home-swiper'
import homeIcons from './components/home-icons'
import homeHot from './components/home-hot'
import homeYouLike from './components/home-youLike'
import homeWeekend from './components/home-weekend'
import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        data:[]
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
    mounted(){
      this.getHomeData();
    },
    methods:{
      getHomeData(){
        axios.get('/api/index.json')
        .then(this.getHomeDataSuccess) 
      },
      getHomeDataSuccess(res){
        res=res.data;
        if(res.ret && res.data){
            const data=res.data;
            this.data=data;
            // console.log(data)  
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
