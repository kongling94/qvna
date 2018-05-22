<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list></detail-list>
        <div class="main"></div>
    </div>
</template>
<script>
import detailBanner from './components/detail-banner'
import detailHeader from './components/detail-header'
import detailList from './components/detail-list'
export default {
    name:"detail",
    components:{
        detailBanner,
        detailHeader,
        detailList
    }    
}
</script>
<style lang="stylus" scoped>
    .main
        height 15rem
</style>
