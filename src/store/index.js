import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_user: null
  },
  mutations: {
    SET_CURRENT_USER: (state, user) => state.current_user = user
  },
  actions: {
    set_current_user({ commit }){
      if(firebase.auth().currentUser){
          const currentUser = firebase.auth().currentUser
          commit('SET_CURRENT_USER', currentUser)
      }
    }

  },
  getters: {
  }
})
