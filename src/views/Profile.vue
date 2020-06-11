<template>
    <b-container class="profile-container" v-if="mounted">
        <div class="profile"> <br> <br> <br> <br>
<div class="container my-container">
  <div class="row my-row">
    <div class="col-md-6 my-col">
        <img v-if="level === 'beginner'" :src="require('../assets/level-images/' + profile_images[0])" class="avatar" height="200px" width="200px"/>
        <img v-else-if="level === 'intermediate'" :src="require('../assets/level-images/' + profile_images[1])" class="avatar" height="200px" width="200px"/>
        <img v-else-if="level === 'advanced'" :src="require('../assets/level-images/' + profile_images[2])" class="avatar" height="200px" width="200px"/>
      <img v-else src="../assets/dashboard/avatar.png" class="avatar" height="200px" width="200px" />
      <br><br>
      <h3 v-if="current_user.displayName"> {{ current_user.displayName }}</h3>
      <h3 v-else>Username not set</h3>
      <br><hr>
      <div class="lvl">
        <h5>{{ level }}</h5>
        <img src="../assets/dashboard/badges.png" class="levels" height="200px" width="auto" />
        <hr>
      </div>
      
    </div>
    <div class="col-md-6  my-col">
      <div class="info player">
        Name: <span v-if="first_name">{{ first_name }}</span><span v-else>not set</span><br> <br>
        Lastname: <span v-if="last_name">{{ last_name }}</span><span v-else>not set</span> <br> <br>
        Email: <span v-if="current_user.email">{{ current_user.email }}</span><span v-else>not set</span><br> <br>
        Date of birth:<span v-if="date_of_birth !== null"> {{ date_of_birth }}</span><span v-else> not set</span><br> <br>
        <hr><br>
      </div>
      <div class="info game">
        Last played: <span v-if="last_played !== null">{{ last_played.toDate() | moment("MMMM Do YYYY") }}</span><span v-else>no games played yet</span><br> <br>
        Matches played: {{ total_played_games }}<br> <br>
        Points collected: {{ total_points }}<br> <br>
        Average points collected: {{ getAveragePoints() }} <br> <br>
        Scoreboard rank: <br> <br><br />
      </div>
      <div class="btn">
        <b-button squared variant="warning" v-b-modal.modal-prevent-closing>Edit profile</b-button>
        <b-button squared variant="warning" class="top"><router-link to="/top_ranking" class="text-black">Scoreboard</router-link></b-button>
      </div>
    </div>
  </div>

</div>


</div>

<!--Modal for updating profile-->
<b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="First name"
          label-for="name-input"
        >
          <b-form-input
            id="name-input"
            v-model="first_name"
            required
          ></b-form-input>

        </b-form-group>

        <b-form-group
          label="Last name"
          label-for="name-input"
        >
        <b-form-input
            id="name-input"
            v-model="last_name"
            required
          ></b-form-input>

        </b-form-group>

        <b-form-group
          label="Username"
          label-for="name-input"
        >
        <b-form-input
            id="name-input"
            v-model="current_user.displayName"
            required
          ></b-form-input>

        </b-form-group>

        <b-form-group
          label="Date of birth"
          label-for="date-of-birth"
        >
        <b-form-datepicker
            id="date-of-birth"
            v-model="date_of_birth"
            required
          ></b-form-datepicker>

        </b-form-group>
      </form>
    </b-modal>
    </b-container>
</template>

<script>
import firebase from 'firebase'

export default {
    data(){
        return{
            mounted: null,
            current_user: null,
            level: null,
            total_points: null,
            badges: null,
            total_played_games: null,
            first_name: null,
            last_name: null,
            date_of_birth: null,
            username: '',
            last_played: null,
            profile_images: [
                'beginner.png',
                'intermediate.png',
                'advanced.png'   
            ]
        }
    },
    methods: {
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      getAveragePoints(){
        if( this.total_played_games !== null){
          return Math.round(this.total_points / this.total_played_games)
        }else{
          return "Not played any games yet."
        }
      },
      handleSubmit() {
        firebase.firestore().collection('profiles').where('user_id', '==', `${this.current_user.uid}`).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.update({
                    first_name: this.first_name,
                    last_name: this.last_name,
                    date_of_birth: this.date_of_birth
                })

                this.current_user.updateProfile({
                    displayName: this.current_user.displayName
                })

                .then(() => {
                    this.$snotify.success('Changes successfully saved!')
                     this.$nextTick(() => {
                        this.$bvModal.hide('modal-prevent-closing')
                    })
                })
            })
        })
      }
    },
    created(){
        this.current_user = firebase.auth().currentUser
    },
    mounted(){
        const current_user_id = this.current_user.uid
        firebase.firestore().collection('profiles').where('user_id', '==', `${current_user_id}`).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.level = doc.data().level,
                this.total_points = doc.data().total_points,
                this.total_played_games = doc.data().total_games_played
                this.badges = doc.data().badges
                this.first_name = doc.data().first_name,
                this.last_name = doc.data().last_name,
                this.date_of_birth = doc.data().date_of_birth,
                this.last_played = doc.data().last_played
                this.mounted = true
            })
        })
    }
}
</script>

<style>
.my-container{
  height: 630px;
  width: 950px;
}
.my-row{
  border:solid 5px #ffd800;  
  height: 100%;
}

.avatar{
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 25px;
}
h3, h5{
  text-align: center;
}
.player{
  text-align: left;
  margin-top: 30px;

}
.info{
  color:black;
  font-size: 18;
  
}
.btn{
  float: right;
  margin-left: 4px;
}

.levels{
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 10px;
}

a.text-black{
  color: black;
  text-decoration:none;

}
@media only screen and (max-width: 770px){
  .my-container{

    height: 1300px;
    width: 400px;

  }
  .my-row{
    border:solid 3px #ffd800; 
    height: 100%;
  }

}
@media only screen and (max-width: 425px){
  .my-container{

    height: 1300px;
    width: 280px;

  }
  .my-row{
    border:solid 3px #ffd800; 
    height: 100%;
  }
  .levels{
    width: 250px;
    height: auto;
  }
  .top{
    margin-top: 5px;
  }

}

</style>