import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    adicionar: state => { 
      return state.count++
    },
    remover: state =>  {
      return state.count--
    }
  },
  getters: {
    dobroAdicionados: state => {
      return state.count * 2
    }
  },
  actions: {

  }
})
