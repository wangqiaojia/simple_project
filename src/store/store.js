import Vue from 'vue'
import vuex from "vuex"
Vue.use(vuex)
export default new vuex.Store({
    state:{
        data:[],
        correctArr:[],
        num:0
    },
    mutations:{
        first(state,brr){
            state.data=brr
            
        }
    },
    actions:{
        getData({commit},arr){
            commit("first",arr)
        }
    }
}) 

