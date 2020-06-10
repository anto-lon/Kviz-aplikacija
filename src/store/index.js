import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_user: null,
    questions: [],
    categories: []
  },
  mutations: {
    SET_CURRENT_USER: (state, user) => state.current_user = user,
    SET_QUESTIONS: (state, questions) => state.questions = questions.results,
    SET_CATEGORIES: (state, categories) =>  {
      for(var i = 0; i < categories.trivia_categories.length; i++){
        var value = categories.trivia_categories[i].id
        var text = categories.trivia_categories[i].name

        state.categories.push({value, text})
    }
    }
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
        commit('SET_QUESTIONS', response.data)
      })
    },
    set_category_questions({commit}, category){
      axios.get(`https://opentdb.com/api.php?amount=10&category=${category}`)
      .then(response => {
        commit('SET_QUESTIONS', response.data)
      })
    },
    get_categories({ commit }){
      axios.get(`https://opentdb.com/api_category.php`)
      .then(response => {
        commit('SET_CATEGORIES', response.data)
      })
    }

  },
  getters: {
  }
})
