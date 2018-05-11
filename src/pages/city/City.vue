<template>
  <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
      <city-searchSlider></city-searchSlider>
  </div>
</template>
<script>
import cityHeader from './components/city-header'
import citySearch from './components/city-search'
import cityList from './components/city-list'
import citySearchSlider from './components/city-searchSlider'

export default {
    name:"City",
    components:{
        cityHeader,
        citySearch,
        cityList,
        citySearchSlider
    }
}
</script>
<style lang="stylus" scoped>

</style>
