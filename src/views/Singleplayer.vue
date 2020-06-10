<template>
    <div>
        <b-container class="singleplayer_container">
            <h1 style="text-align:center" class="text-warning">Singleplayer</h1>

            <br />

            <b-button variant="outline-warning" @click.prevent="handleQuestions">Random questions</b-button>

            <br />

            <div>
                <b-form-select v-model="selected" :options="categories"></b-form-select>
            </div>

            <br /><br />

            <b-button variant="outline-warning" @click="handleCategoryQuestions">Play</b-button>
            
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
    .singleplayer_container{
        display: grid;
        justify-content: center;
        margin: 5em;
    }
</style>