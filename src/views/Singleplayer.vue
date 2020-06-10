<template>
    <div>
        <b-container class="singleplayer_container">
            <h1>Singleplayer</h1>
            {{ current_user.email }}

            <br />

            <b-button variant="outline-warning" @click.prevent="handleQuestions">Fetch data</b-button>
            
        </b-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name: 'Singleplayer',
    computed: {
        ...mapState(['current_user', 'questions'])
    },
    methods:{
        ...mapActions(['set_current_user', 'set_random_questions']),
        handleQuestions(){
            this.set_random_questions()
            this.$router.push({path: '/singleplayer/singleplayer_game'})
        }
    },
    created(){
        this.set_current_user()
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