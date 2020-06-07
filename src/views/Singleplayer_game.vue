<template>
<div class="quiz"> 
<div class="container w-100 p-3 my-container">
  <div class="row my-row">
    <div class="col-md-4 my-col-left">
        <br><br>
        <h3>Nickname</h3>
        <h4>Ivan </h4>
        <br><hr class="cc">
        <br>
        <h3>Collected points </h3>
        <h4> {{value*10}} </h4>
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
        <div class="col-md-8 my-col-right">
        <br><br>
        <h3> Question no. {{current}}/{{max}} </h3> 
        <br> 
        <div class="question">
        <p>{{que}} </p>  
        </div> 
        <br><br><br>
        <div class="answ">
            <b-button block variant="outline-warning">A)</b-button><br><br><br>
            <b-button block variant="outline-warning">B)</b-button><br><br><br>
            <b-button block variant="outline-warning">C)</b-button><br><br><br>
            <b-button block variant="outline-warning">D)</b-button><br><br><br>
        </div>
        <div class="btn">
            <b-button squared variant="warning">Next</b-button>
        </div>

    </div>
  </div>




</div>
</div>
</template>


<script>
  export default {
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
.answ{
    width: 80%;
    margin: 0 auto;
}
.question, p{
    font-size: 37px;
}

 @media only screen and (max-width: 760px){
     .question, p{
         font-size: 20px;
     }
     .my-row{
       margin: 0 auto;
       margin-top:60px ;
     }
     
 }
</style>













