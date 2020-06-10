<template>
<div class="quiz">
<div class="container w-100 p-3 my-container">
  <div class="row my-row">
    
    <SidebarGame
    :points="points"
    :current_user="current_user"
    />
    
    <questionBox v-if="questions.length"
     :currentQuestion="questions[current_index]"
     :next="next"
     :increment="increment"
     :counterQuestions="counter"
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
        },
        increment(isCorrect, difficulty){
          if(isCorrect){
            this.numCorrect++
            this.points += this.difficultys[difficulty];
            console.log(this.points, difficulty)
          }
          this.numTotal++;
      }
    },
    computed: {
        ...mapState(['questions'])
    },
    created(){
        this.current_user = firebase.auth().currentUser
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













