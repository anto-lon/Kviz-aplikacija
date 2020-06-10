<template>
    <div class="header dropdownFix" >
      <b-navbar toggleable="lg" type="dark"  variant="warning" class="transparent">
        <b-navbar-brand href="#">Don Quizotee</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/" class="link">Home</router-link>
            <router-link to="/about" class="link">About</router-link>
            <router-link to="/singleplayer" class="link">Singleplayer</router-link>
            <router-link to="/top_ranking" class="link">TopRanking</router-link>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
              <router-link to="/login" class="link" v-show="!isLoggedIn">Login</router-link>
              <router-link to="/register" class="link" v-show="!isLoggedIn">Register</router-link>
              <router-link to="/profile" v-show="isLoggedIn" class="profile-link"><i class="material-icons account">account_circle</i></router-link>
              <b-button class="btn btn-danger" @click="logout" v-show="isLoggedIn">Logout</b-button>
          </b-navbar-nav>
          
        </b-collapse>
        
      </b-navbar>
      
    </div>
    

</template>

<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      isLoggedIn: false,
      currentUser: false
    }
  },
  methods: {
        logout(){
            firebase.auth().signOut()
            .then(() => {
                this.$router.push('/login')
            })
        }
    },created() {
        if(firebase.auth().currentUser){
          this.isLoggedIn = true
            this.currentUser = firebase.auth().currentUser.email
            console.log(firebase.auth().currentUser.email)
        }
    }
}
</script>

<style scoped>
  .dropdownFix{
    position:fixed;
    width: 100vw;
    z-index: 1;
    top:0;
    
  }

  .link{
    color: white;
    margin: 0 1em;
    text-decoration: none;
  }

  .profile-link .account{
    font-size: 1.5em;
    color: rgba(0, 0, 0, 0.5)!important;
    margin-top: 10px;
    margin-right: 1em;
  }

  .profile-link{
    margin-left: 0.8em;
  }

  .navbar-brand{
      font-size: 24px;
      text-transform: uppercase;
    }
  a{
    font-size: 16px;
  }

  @media only screen and (min-width: 990px) {

    .dropdownFix{
      position: relative;
      
    }

    .header{
      width: 80%;
      margin: auto;
      
    }
     .transparent{
      background-color: transparent !important;
    }
    .navbar-brand{
      color: #ffd800!important;
      font-size: 30px;
      text-transform: uppercase;
      
    }
    a{
      color: #ffd800!important;
      font-size: 22px;
      
    }
    .dropdownFix, .header, .transparent, .navbar-brand, a{
      z-index: 1;
    }

}
  

</style>
      