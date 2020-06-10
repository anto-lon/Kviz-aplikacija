<template>
    <div>
        <b-container class="bv-example-row "><br><br><br>
        <b-row>
            <b-col> <h1> Singleplayer mode's </h1> </b-col>
        </b-row>
        <br><br><br><br><br>
        <b-row>
            <b-col> 
                <h3>Random questions </h3> <br>
                <div class="btn">
                <b-button variant="outline-warning" @click.prevent="handleQuestions">Random questions</b-button>
                </div> <br><br>
            </b-col>
            <b-col> 
                <h3> Select question group </h3> 
                <div class="select">
                <b-form-select v-model="selected" :options="categories"></b-form-select>
                </div><br><br><br><br>
                <div class="btn2">
                    <b-button variant="outline-warning" @click="handleCategoryQuestions">Play</b-button>
                </div><br><br><br><br>
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
    }
}
</script>

<style scoped>
.bv-example-row{
    margin-top: 65px;
    text-align: center;
    color: #ffd800;
    font-family: Verdana;
}
h1{
text-shadow: 1px 1px 2px rgba(74,74,74,0.64);
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
}

</style>