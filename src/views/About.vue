<template>
<div class="body">
<b-container class="bv-example-row">
  <b-row>
    <b-col md="12"><h3>This page was made by two computer science students at FPMOZ,<br> it was done as a project in the second year of schooling.
    <br> Below this our text you can find a link to our faculty, the switch association and our university. <br> If you haven't tried our quiz yet, try it and you won't regret it, I promise you</h3></b-col>
  </b-row>
  <br><br><br>
  <hr class="line">
  <b-row>
    <b-col md="6"> <br><br><br><br> Here we have a picture that shows us the registration which is very easy, all you need is to enter the name@mail.com and your password .. after that edit the profile and it's quite easy and simple</b-col>
    <b-col md="6"><img class="registration" src="..\assets\dashboard\registration.png"></b-col>
  </b-row>
  <hr class="line">
  <br><br>
  <b-row>
    <b-col md="6"> <br><br> This is a picture from the choice of category, where we gave you two choices, one of them is a random category (picture no. 1) and the other choice is up to you to choose one category (sport, history, etc .. picture no. 2)</b-col>
    <div class="show"><br><br><br><br><br><br><br><br></div>
    <b-col md="6"><img class="modes" src="..\assets\dashboard\modes.png"></b-col>
  </b-row>
  <hr class="line">
  <br>

  <b-row>
    <b-col md="4"><img src="..\assets\dashboard\sum.png"></b-col>
    <b-col md="4"><img src="..\assets\dashboard\switch.png"></b-col>
    <b-col md="4"><img src="..\assets\dashboard\fpmoz.png"></b-col>
  </b-row>
</b-container>
</div>
</template>

<style scoped>
.body{
  margin-top: 130px;
  text-align: center;
}
.modes{
  height: 400px;
  width: auto;
  margin-top:-130px;
}
.registration{
  height: 300px;
  width: auto;
}
img{
  height: 200px;
  width: auto;
}
hr.line {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

@media only screen and (max-width: 780px){
  .modes{
    height: 200px;
    margin-top: auto;
    
  }
}
</style>











