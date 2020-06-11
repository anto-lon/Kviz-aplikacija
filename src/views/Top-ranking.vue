<template>
  <div class="top_ranking">
    <div class="update-info">
      <p>If you dont see you'r name on the scoreboard, please update you'r profile info!</p>
      <b-btn variant="primary"><router-link to="/Profile" class="text">Update profile info</router-link></b-btn>
    </div>

    <hr />

    <b-container>
      <b-table striped hover :items="sortedItems"></b-table>
    </b-container>
  </div>
</template>

<script>
import firebase  from 'firebase'
  export default {
    data() {
      return {
        items: []
      }
    },
    computed: {
      sortedItems(){
        const sortedItems = this.items
        sortedItems.sort(this.compare)

        return sortedItems
      }
    },
    methods:{
      compare(a, b) {
        const a_avg = a.avg_points
        const b_avg = b.avg_points

        let comparison = 0;
        if (a_avg < b_avg) {
          comparison = 1;
        } else if (a_avg > b_avg) {
          comparison = -1;
        }
        return comparison;
      }
    },
    mounted(){
      firebase.firestore().collection('profiles').get()
      .then(quersSnapshot => {
        quersSnapshot.forEach(doc => {
            if(doc.data().total_games_played >=1 && doc.data().first_name !== null && doc.data().last_name !== null){
              const profile = {
              firstname: doc.data().first_name,
              lastname: doc.data().last_name,
              avg_points: Math.round(doc.data().total_points / doc.data().total_games_played)
            }
            this.items.push(profile)
          }
        })
      })
    }
  }
</script>

<style>
.top_ranking{
  margin-top: 4em;
}

.update-info{
  display: grid;
  place-items: center;
  margin-bottom: 2em;
}

.update-info p{
  font-size: 22px; 
}
a.text{
  color:white;
  text-decoration: none;
}

@media only screen and (max-width: 760px){
      .update-info{
        margin-top: 5em;
      }

     .update-info p{
      font-size: 12px;
      text-align: center; 
    }

     
 }
</style>