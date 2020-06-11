<template>
  <main>
        <div class="landing">
            <div class="main-section">
                <div class="intro-text"><br>
                    <h1>Quiz that pushes the boundaries</h1>
                    <p>
                        Test your knowledge on a new and different quiz.
                    </p>
                </div>
                <div class="button-section">
                    <b-button  squared variant="warning" ><router-link to="/singleplayer" class="text-black">Getting started</router-link></b-button>
                    <b-button  squared variant="warning" ><router-link to="/singleplayer" class="text-black">Learn more</router-link></b-button>
                </div>
            </div>
            <div class="animation">
                <img src="../assets/dashboard/ask.png" height="300px" width="300px" />
            </div>
        </div>
        <img src="../assets/dashboard/l-side.png" class="side_img"/>

        <div class="boxCard">
          <div class="mb-5 text-center">
              <h3 class="card-info">Learn more about our app</h3><br>
          </div>
            <div class="bv-example-row">
              <b-row>
                <b-col sm="12" md="4">
                  <div class="box">
                    <b-card
                      title="Singleplayer"
                      img-src="https://imagehost.imageupload.net/2020/04/28/singleplayer.png"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 50rem;"
                      class="mb-2"
                    >
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button squared variant="warning" class="cardbtn"><router-link to="/singleplayer" class="text">Play</router-link></b-button>
                    </b-card>    
                  </div>
                </b-col>

                
                  <b-col sm="12" md="4">
                  <div class="box">
                    <b-card
                      title="Sign in"
                      img-src="https://i.ibb.co/njnM2Gg/login.png"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 50rem;"
                      class="mb-2 test123"
                    >
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button  squared variant="warning" class="cardbtn"><router-link to="/login" class="text">Sign in</router-link></b-button>
                    </b-card>    
                  </div>
                </b-col>
                  <b-col sm="12" md="4">
                  <div class="box">
                    <b-card
                      title="About..."
                      img-src="https://i.ibb.co/yg4NBdG/info.png"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 50rem;"
                      class="mb-2"
                    >
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button  squared variant="warning" class="cardbtn"><router-link to="/About" class="text">More about</router-link></b-button>
                    </b-card>    
                  </div>
                </b-col>
                
              </b-row>
            </div>
        </div>
        <div class="parallax">
          <div class="box-us">
          <b-row>
              <!--First card about us-->
              <b-col md="6">
            
              <div class="card-us">
                <b-card no-body class="overflow-hidden" style="max-width: 270px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="https://i.ibb.co/xhP0bz3/avatarstanko.png" alt="Image" class="rounded-0"  height="200px"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Stanko Bebek">
                        <b-card-text>
                          Lorem ipsum...
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
            
            </b-col>
                <!--Second card about us-->
                <b-col md="6">
            <div class="card-us">
                <b-card no-body class="overflow-hidden" style="max-width: 270px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="https://i.ibb.co/51Rkx5d/avatarantonio.png" alt="Image" class="rounded-0" height="200px"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Antonio Lončar">
                        <b-card-text>
                          Lorem ipsum...
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>

              </b-col>
          </b-row>
          </div>
        </div> <br><br>
        <Footer />
    </main>
</template>

<script>
import Footer from '../components/Footer'
export default {
  components: {
    Footer
  },
  name: 'Home'
}
</script>

<style scoped>

  .img{
    left: 0;
  }

  .landing{
    display: flex;
    align-items: center;
    width: 70%;
    margin: auto;
  }

  .button-section .btn{
    margin: 1em;
  }

  .animation{
    flex: 1;
    justify-content: flex-end;
  }

  .side_img{
    position: absolute;
    top: 0;
    left:0;
    z-index: -1; 
    height: 60vh;
    width: 100%;
  }

  .main-section{
    flex: 3;
  }
  .card-info{
    color: #ffd800;
    font-size: 2.3em;
    margin-top: 2em;
  }

  .box-us{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .cardbtn{
    border: none;
    background-color: #ffd800;
    cursor: pointer; 
  }

  .boxCard{
    align-items: center;
    margin-top:50px;
    margin-bottom: 60px;
    margin-left: 10%;
    margin-right: 10%;
  }

  .parallax{
    background: url('../assets/dashboard/parallax.jpg') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    height: 600px;
  }

  p {
    word-break: break-word;
}
a.text{
  color: white;
  text-decoration: none;
}
a.text-black{
  color:black;
  text-decoration: none;
}




  @media only screen and (max-width: 768px) {
  .animation, .side_img {
    display: none;
  }

  .intro-text{
    margin-top: 100px;
    font-size: 12px;
    text-align: center
  }

  .intro-text h1{
    font-size: 32px;
  }

  .boxCard h3{
    font-size: 22px;
  }

  .button-section{
    text-align: center;
  }

  .box{
    display: grid;
    place-items: center;
  }

  .parallax{
    height: 1400px;
  }

  .box-us div{
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .box-us div:nth-child(2){
    margin-top: 2em;
  }
  
}

 @media only screen and (max-width: 992px) {
   .animation, .side_img{
     display: none;
   }

   .intro-text{
     margin-top: 100px;
   }

   .intro-text h1{
    font-size: 32px;
  }

   .intro-text, .button-section{
     display: grid;
     place-items: center;
   }

   .button-section{
     display: flex;
     justify-content: center;
   }
 }


</style>