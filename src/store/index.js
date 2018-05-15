import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        city:'上海'
    },
    actions:{
        changCity(ctx, city) {
            console.log("actions" + city)
            stx.dispatch('changCity',city)
        }
    },
    mutations: {
        changCity(state, city) {
            state.city = city
        }
    }
})