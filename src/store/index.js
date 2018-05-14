import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        city:'北京'
    },
    actions:{
        changCity(ctx, city) {
           console.log(city)  
        }
    },
    mutations: {
        changCity(state, city) {
            state.city = city
        }
    }
})