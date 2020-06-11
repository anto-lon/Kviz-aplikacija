<template>
    <div>
        <b-container class="bv-example-row "><br><br><br>
        <b-row>
            <b-col> <h1> Singleplayer mode's </h1> </b-col>
        </b-row>
        <br><br><br><br><br>
        <b-row>
            <b-col xs="12" md="6"> 
                <h3>Random questions mode </h3> <br>
                <div class="btn">
                <b-button variant="outline-warning" @click.prevent="handleQuestions">Random questions</b-button>
                <div class="hide">
                    <hr class="line top">
                </div>
                </div> <br><br> 
            </b-col>
            <b-col xs="12" md="6" class="category_questions"> 
                <h3 class="top2"> Select category mode </h3> 
                <div class="select">
                <b-form-select v-model="selected" :options="categories"></b-form-select>
                </div><br><br><br><br>
                <div class="btn2">
                    <b-button variant="outline-warning" @click="handleCategoryQuestions" block>Play</b-button>
                </div><br><br><br><br><br><br>
            </b-col>    
        </b-row>
        <b-row>
            <b-col>
                    <hr class="line"> <br>
                   <p> Player name: {{ current_user.displayName }}</p>
        
            </b-col>    
        </b-row>
        </b-container>


    </div>
</template>

<script>
import firebase from 'firebase'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name: 'Singleplayer',
    data() {
      return {
        selected: null
      }
    },
    computed: {
        ...mapState(['current_user', 'questions', 'categories'])
    },
    methods:{
        ...mapActions(['set_current_user', 'set_random_questions', 'set_category_questions', 'get_categories']),
        handleQuestions(){
            this.set_random_questions()
            this.$router.push({path: '/singleplayer/singleplayer_game'})
        },
        handleCategoryQuestions(){
            this.set_category_questions(this.selected)
            this.$router.push({path: '/singleplayer/singleplayer_game'})
        }
    },
    created(){
        this.set_current_user()

        this.get_categories()
    },
    mounted(){
        firebase.firestore().collection('profiles').where('user_id', '==', `${this.current_user.uid}`).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                if(doc.data().first_name === null || doc.data().last_name === null){
                    this.$fire({
                    title: "Update your profile info!",
                    text: "Please update your profile if you wanna see your name on the scoreboard",
                    type: "warning",
                    timer: 4000
                  })
                }
          })
        })
    }
}
</script>

<style scoped>
.bv-example-row{
    margin-top: 65px;
    text-align: center;
    font-family: Verdana;
}
h1{
text-shadow: 1px 1px 2px rgba(74,74,74,0.64);
color: #ffd800;
}

.btn{
margin: auto;
    position: absolute;
    top: 30px;
    left: 0;
    bottom: 0;
    right: 0;
    height: 40px;
}
.select{
margin: auto;
    position: absolute;
    top: 60px;
    left: 0;
    bottom: 0;
    right: 0;
    height: 40px;   
}
.btn2{
margin: auto;
    position: absolute;
    top: 160px;
    left: 0;
    bottom: 0;
    right: 0;
    height: 40px; 
}
hr.line {
    overflow: visible; /* For IE */
    padding: 0;
    border: none;
    border-top: medium double #333;
    color: #333;
    text-align: center;
}
hr.line:after {
    content: "§";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: white;
}
p{
    font-size: 20px;
    color: black;
}
.hide{
    display: none;

}


@media only screen and (max-width: 767px) {
  h3{
    font-size: 1.4em;
  }

  .category_questions{
      margin-top: 2em;
  }
  .hide{
      display: inline;   
  }
  .top{
      margin-top:110px ;
  }
    .top2{
        margin-top:80px ;    
  }
}

</style>