<template>
  <div class="top_ranking">
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
            if(doc.data().total_games_played >=1){
              const profile = {
              firstname: doc.data().first_name,
              lastname: doc.data().last_name,
              avg_points: doc.data().total_points / doc.data().total_games_played
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
  margin-top: 3.5em;
}
</style>