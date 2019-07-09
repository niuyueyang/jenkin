import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:'111'
  },
  mutations: {
    changeColor(state,val){
      state.color=val;
    }
  },
  actions: {
    changeSync(ctx,val){
      ctx.commit('changeColor',val)
    }
  }
})
