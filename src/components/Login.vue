<template>
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
        <b-input type="password" id="text-password" v-model="password"></b-input>
        <b-form-text id="password-help-block">
        Your password must be 8-20 characters long, contain letters and numbers, and must not
        contain spaces, special characters, or emoji.
        </b-form-text>
        <b-button variant="outline-primary" @click.prevent="register">Pošalji</b-button>
      </b-form>
  </div>
</template>

<script>
import firebase from 'firebase'
  export default {
    data() {
      return {
        email: '',
        password: '',
        food: null,
        show: true
      }
    },
    methods: {
      register(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
  }
</script>