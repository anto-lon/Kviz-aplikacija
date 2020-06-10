<template>
    <div class="col-md-4 my-col-left">
        <br><br>
        <h3>Nickname</h3>
        <h4>{{ current_user.displayName }}</h4>
        <br><hr class="cc">
        <br>
        <h3>Collected points </h3>
        <h4> {{ points }} </h4>
        <br><hr class="cc">
        <br>
        <h3>Rank </h3>
        <h4>Silver </h4>
        <br><hr class="cc">
        <br>
        <h3> Correct question </h3>
          <br> <h4>{{value}} / {{current}}</h4>
          <br> <div class="progress"> <b-progress :max="max">
      <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
    </b-progress></div>
    <br>
</div>
</template>


<script>
  export default {
    props:{
        points: Number,
        current_user: Object
    },
    data() {
      return {
        value: 4,
        max: 10,
        current: 7,
        que:"Here goes question Here goes question Here goes question  "
      }
    }
  }
</script>


<style scoped>
div, .quiz{
  width: 100%;
  height: 100%;
}
.quiz{
text-align: center;
}
.my-col-left{
  background-color: #ffd800;
  height: 100%;
  width: 100%;
  color: aliceblue;
}
.my-col-right{
  height: 100%;
  width: 100%;
  color:#ffd800; 
}
hr.cc{
    overflow: visible; /* For IE */
    height: 30px;
    border-style: solid;
    border-color: aliceblue;
    border-width: 1px 0 0 0;
    border-radius: 20px;
}
hr.cc:before{
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color:aliceblue;
    border-width: 0 0 1px 0;
    border-radius: 20px;
}
.progress, b-progress-bar{}

</style>