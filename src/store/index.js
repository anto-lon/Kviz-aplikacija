import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_user: null,
    questions: []
  },
  mutations: {
    SET_CURRENT_USER: (state, user) => state.current_user = user,
    SET_RANDOM_QUESTIONS: (state, questions) => state.questions = questions.results
  },
  actions: {
    set_current_user({ commit }){
      if(firebase.auth().currentUser){
          const currentUser = firebase.auth().currentUser
          commit('SET_CURRENT_USER', currentUser)
      }
    },
    set_random_questions({ commit }){
      axios.get('https://opentdb.com/api.php?amount=10')
      .then(response => {
        commit('SET_RANDOM_QUESTIONS', response.data)
      })
    }

  },
  getters: {
  }
})
