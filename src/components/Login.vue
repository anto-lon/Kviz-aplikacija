<template>
   <div>
  <br><br><br><br>
    <b-container class="shadow">
      <b-row >
        <div class="remove">
          <b-col class=".col-xs-6 .col-md-6">
            <div class="container">
              <img class="photo" src="..\assets\dashboard\siginl-side.png">
              <div class="text" ><p> Let's get started </p></div>
            </div>
          </b-col>
        </div>
        <b-col class=".col-xs-6 .col-md-6 signinbox">
           <b-row > 
            <b-col> <h1 class="naslov">Sign in</h1></b-col>
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
                    placeholder="Enter email"
                  ></b-form-input>

                </b-form-group>
                  <label for="text-password">Password</label>
                  <b-input type="password" id="text-password" v-model="password" v-on:keyup.enter="login"></b-input>
                  <b-form-text id="password-help-block">
                  Your password must be 8-20 characters long, contain letters and numbers, and must not
                  contain spaces, special characters, or emoji.
                  </b-form-text>
                  <br>
                  <div class="wrapper">
                    <b-button variant="warning" class="button " @click.prevent="login"> Submit</b-button>
                  </div><br><br>
                    <div class="sign">
                      <p>New here?<a><router-link to="/Register" class="text-black">Sign up.</router-link></a></p>
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
        password: '',
        show: true
      }
    },
    methods: {
      login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                this.$snotify.success(`You have been successfully logged in with ${user.user.email}`)
                this.$router.push('/singleplayer')
            })
            .catch(err => {
                this.$snotify.error(err)
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
  border: none;
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
  font-size: 2.5em;
  text-shadow: 2px 2px 4px #000000;
}

.form__input{
  color: red;
}


</style>