<template>
    <div>
        <b-container class="singleplayer_container">
            <h1>Singleplayer</h1>
            {{ current_user.email }}
        </b-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name: 'Singleplayer',
    computed: {
        ...mapState(['current_user'])
    },
    methods:{
        ...mapActions(['set_current_user'])
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