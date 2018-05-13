<template>
  <div>
      <city-header></city-header>
      <city-search :cities="data.cities"></city-search>
      <city-list :data="data" :listNum="listNum"></city-list>
      <city-searchSlider :sliderList="data.cities"  @toList="handleListJump"></city-searchSlider>
  </div>
</template>
<script>
import cityHeader from './components/city-header'
import citySearch from './components/city-search'
import cityList from './components/city-list'
import citySearchSlider from './components/city-searchSlider'
import axios from 'axios'

export default {
    name:"City",
    data(){
        return{
            data:"",
            listNum:""
        }
    },
    components:{
        cityHeader,
        citySearch,
        cityList,
        citySearchSlider
    },
    mounted () {
        this.getCityData()
    },
   methods: {
       getCityData(){
           axios.get('/api/city.json')
           .then(this.getSuccess)
       },
       getSuccess(res){
           res=res.data
           if(res.ret && res.data){
               const data=res.data;
               this.data=data;
           }
       },
       handleListJump(num){
           this.listNum=num;
       }
       
   }
}
</script>
<style lang="stylus" scoped>

</style>
