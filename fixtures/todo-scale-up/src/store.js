import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todolist: []
  },
  mutations: {
    updatetodolist(state, list) {
      state.todolist = list
    }
  },
  actions: {

  }
})