<template>
<div class="quiz">
<div class="container w-100 p-3 my-container">
  <div class="row my-row">
    
    <SidebarGame
    :points="points"
    :current_user="current_user"
    :current_user_profile="current_user_profile"
    :numCorrect="numCorrect"
    :numTotal="numTotal"
    />
    
    <questionBox v-if="questions.length"
     :currentQuestion="questions[current_index]"
     :next="next"
     :increment="increment"
     :counterQuestions="counter"
     :numTotal="numTotal"
     />


</div>
</div>
</div>
</template>


<script>
import questionBox from '../components/Question-box'
import SidebarGame from '../components/Sidebar-game'
import firebase from 'firebase'
import { mapState } from 'vuex'
  export default {
    components: {
      questionBox,
      SidebarGame
    },
    data() {
      return {
        current_user: null,
        current_index: 0,
        counter: 0,
        numCorrect: 0,
        numTotal: 0,
        points:0,
        current_user_profile: {
          level: null,
          total_points: null,
          total_played_games: null,
          badges: null
        },
        difficultys:{
          easy: 10,
          medium: 30,
          hard: 50
        }
      }
    },
    methods:{
        next(){
          this.current_index++
          this.counter++
          this.numTotal++

        },
        increment(isCorrect, difficulty){
          if(isCorrect){
            this.numCorrect++
            this.points += this.difficultys[difficulty];
            console.log(this.numCorrect, difficulty)
          }
          this.numTotal++;
          console.log(this.numTotal)
      }
    },
    computed: {
        ...mapState(['questions'])
    },
    created(){
        this.current_user = firebase.auth().currentUser
    },
    mounted(){
        const current_user_id = this.current_user.uid
        firebase.firestore().collection('profiles').where('user_id', '==', `${current_user_id}`).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.current_user_profile.level = doc.data().level,
                this.current_user_profile.total_points = doc.data().total_points,
                this.current_user_profile.total_played_games = doc.data().total_games_played
                this.current_user_profile.badges = doc.data().badges
            })
        })
    }
  }
</script>


<style scoped>
div, .quiz{
  width: 100%;
  height: 100%;
}
.quiz{
text-align: center;
}

 @media only screen and (max-width: 760px){
     .my-row{
       margin: 0 auto;
       margin-top:60px ;
     }
     
 }
</style>













