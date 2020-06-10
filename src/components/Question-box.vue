<template>
        <div class="col-md-8 my-col-right">
        <br><br>
        <h3> Question no. {{ counterQuestions + 1}} / {{ currentQuestion.difficulty }}</h3> 
        <br> 
        <div class="question">
        <p>{{ currentQuestion.question }}</p>  
        </div> 
        <br><br><br>
        <!--Prepraviti naknadno ternarne operatore i staviti pod funkcije radi preglednosti-->
         <b-list-group-item v-for="(answer, index) in answers" :key="index" @click="selectedAnswer(index)"
          :class="[!answered && selectedIndex === index ? 'selected' : 
              answered && correctIndex === index ? 'correct':
              answered &&  correctIndex !== index && selectedIndex === index? 'incorrect': ''
          ]">
              {{ answer }}
          </b-list-group-item>
        <div class="btn">
            <b-button variant="success" @click="submitAnswer" :disabled="selectedIndex === null || answered">Send</b-button>
            <b-button @click="next(answered)" variant="warning" href="#" v-if="counterQuestions !== 9">Next</b-button>
            <b-button @click="finishGame" variant="primary" href="#" v-else>Finish</b-button>
        </div>

    </div>
</template>


<script>
  export default {
    props:{
      currentQuestion: Object,
      next: Function,
      increment: Function,
      counterQuestions: Number,
      numTotal: Number,
      sendResultsOnFinish: Function
    },
    data() {
      return {
        selectedIndex: null,
        correctIndex: null,
        answered: false,
        counter: 0
      }
    },
    watch: {
      currentQuestion:{
        immediate: true,
        handler(){
            this.selectedIndex = null,
            this.answered = false,
            this.checkAnswers()
        }
          
      }
        },
     methods:{
      selectedAnswer(index){
          this.selectedIndex = index;    
      },
      checkAnswers(){
          this.correctIndex = this.answers.indexOf(this.currentQuestion.correct_answer);
      },
      submitAnswer(){
          let isCorrect = false;
          if(this.selectedIndex === this.correctIndex){
              isCorrect = true;
          }
          this.answered = true;
          this.increment(isCorrect, this.currentQuestion.difficulty);
      },
      finishGame(){
        this.sendResultsOnFinish()
        this.$router.go(-1)
      }
    },
    computed: {
      answers(){
          let answers = [...this.currentQuestion.incorrect_answers];
            function getRandomInt(max) {
              return Math.floor(Math.random() * Math.floor(max));
              }
          answers.splice(getRandomInt(answers.length),0,this.currentQuestion.correct_answer)
    
          return answers
          
      }
  },
}
</script>


<style scoped>
.my-col-right{
  height: 100%;
  width: 100%;
  color:#ffd800; 
}

.answ{
    width: 80%;
    margin: 0 auto;
}
.question, p{
    font-size: 37px;
}

/*Selected answers*/
  .list-group-item:hover{
      background: #f4f4f4;
      cursor: pointer;
  }
  .selected{
      background: darkgray;
  }
  .correct{
      background: green;
  }
  .incorrect{
      background: red;
  }
 @media only screen and (max-width: 760px){
     .question, p{
         font-size: 20px;
     }
     .my-row{
       margin: 0 auto;
       margin-top:60px ;
     }
     
 }
</style>