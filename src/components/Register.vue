<template>
   <div>
  <br><br><br><br>
    <b-container class="shadow">
      <b-row >
        <div class="remove">
          <b-col class=".col-xs-6 .col-md-6">
            <div class="container">
              <img class="photo" src="..\assets\dashboard\siginl-side.png">
              <div class="text" ><p> Sign up for free </p></div>
            </div>
          </b-col>
        </div>
        <b-col class=".col-xs-6 .col-md-6 signinbox">
           <b-row > 
            <b-col> <h1 class="naslov">Sign up</h1></b-col>
           </b-row>
           <b-row class="form">
             <div>
              <b-form v-if="show">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="email"
                    type="email"
                    required
                    placeholder="example@mail.com"
                  ></b-form-input>

                </b-form-group>
                  <label for="text-password">Password</label>
                  <b-input type="password" id="text-password" v-model="password"></b-input>
                  <b-form-text id="password-help-block">
                  Your password must be 8-20 characters long, contain letters and numbers, and must not
                  contain spaces, special characters, or emoji.
                  </b-form-text>
                  <br>
                  <div class="wrapper">
                    <b-button variant="warning" class="button " @click.prevent="register"> Submit</b-button>
                  </div><br><br>
                  <div class="sign">
                    <p>Already have account?<a ><router-link to="/Login" class="text-black">Sign in here.</router-link></a></p>
                  </div>

                </b-form>
            </div> 
           </b-row>
        </b-col>               
      </b-row>
    </b-container>
  
  
  
  
  
  
  </div> 

</template>

<script>
import firebase from 'firebase'

  export default {
    data() {
      return {
        email: '',
        name: '',
        password: '',
        show: true
      }
    },
    methods: {
      register(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
                this.$snotify.success(`You have been successfully logged in with ${user.user.email}`)
                this.$router.push('/')
                //console.log(user.user.uid)
                this.addNewProfile(user.user.uid)

            })
            .catch(err => {
                this.$snotify.error(err)
            })
        },
        addNewProfile(created_user_id){
        firebase.firestore().collection('profiles').add({
          user_id: created_user_id,
          first_name: null,
          last_name: null,
          level: 'beginner',
          total_games_played: 0,
          total_points: 0,
          date_of_birth: null,
          last_played: null
        })
      }
    }
  }
</script>
<style scoped>
.shadow{
  width:100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
.signinbox{
  border:solid #ffd800 10px;
}
h1, .naslov{
align-items: center;
color:grey;
padding: 25px;

}
.photo{
width: 630px;
height: 640px;
padding: 30px;
}
.form{
  margin: 10%;
}
.button{
  border:none;
  border-radius: 0px;
  position: absolute;
  margin-left:-25px;

}
.form p{
  text-align: center;
  margin-top: 2px;
}
.down{
  padding: 50px;

}
@media screen and (max-width: 1200px){
  .remove, .photo{
    display: none;
  }
  .signinbox{
  border:solid #ffd800 10px;
}
}
.container{
  position: relative;
}
.text{
  position: absolute;
  top:40%;
  left:0;
  width:100%;
  color:white;
  font-size: 40px;
  text-shadow: 2px 2px 4px #000000;
}




</style>