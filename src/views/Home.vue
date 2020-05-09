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
                    <b-button squared variant="outline-warning">Getting started</b-button>
                    <b-button squared variant="warning">Learn more</b-button>
                </div>
            </div>
            <div class="animation">
                <img src="../assets/dashboard/ask.png" height="300px" width="300px" />
            </div>
        </div>
        <img src="../assets/dashboard/l-side.png" class="side_img"/>
        
        <br><br><br>

        <div class="boxCard">
            <b-container class="bv-example-row">
              <b-row>
                <b-col class="col">
                  <div class="box">
                    <b-card
                      title="Singleplayer"
                      img-src="https://imagehost.imageupload.net/2020/04/28/singleplayer.png"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                    >
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button href="/singleplayer" squared variant="warning" class="cardbtn">Play</b-button>
                    </b-card>    
                  </div>
                </b-col>

                
                  <b-col class="col">
                  <div class="box">
                    <b-card
                      title="Sign in"
                      img-src="https://i.ibb.co/njnM2Gg/login.png"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                    >
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button href="/login" squared variant="warning" class="cardbtn">Sign in</b-button>
                    </b-card>    
                  </div>
                </b-col>
                  <b-col class="col">
                  <div class="box">
                    <b-card
                      title="About..."
                      img-src="https://i.ibb.co/yg4NBdG/info.png"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                    >
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button href="/about" squared variant="warning" class="cardbtn">More about</b-button>
                    </b-card>    
                  </div>
                </b-col>
                
              </b-row>
            </b-container>
        </div>
        <hr>
        <div class="box-info">
            <br><br>
            <h1>Info</h1>
            <p>Lorem, ipsum dolor sitamet consectetur adipisicing elit. Odio, velit ab? Alias, recusandae quo. Quos veniam reprehenderit voluptates consectetur consequatur excepturi unde, harum iure. Dignissimos exercitationem esse eaque accusantium fugiat!</p>
        <br><br>
        </div>
        <hr><br><br>

        <div class="box-us" >
          <b-container class="bv-example-row">
            <b-row>
              <b-col>
                                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Stanko Bebek">
                        <b-card-text>
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
              </b-col>
              <b-col>
                                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Antonio Lončar">
                        <b-card-text>
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </div>         
    </main>
</template>

<script>
export default {
  name: 'Home',
  
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
.box-info{
    max-width: 100%;
    margin-left: 11%;
    margin-right: 7%;
    display: grid;
    grid-template-columns:repeat(1,1fr);
    grid-auto-rows: minmax(30px,auto);
    text-align: center;
}
.box-us{
  margin-bottom: 100px;
}
.box-us div{
    align-items: center;
}
.cardbtn{
border: none;
 background-color: #ffd800;
 cursor: pointer; 
}
.boxCard{
align-items: center;
margin-top:170px;
margin-bottom: 60px;
margin-left: 10%;
margin-right: 10%;
}
/*
Ovo ne funk bas na onaj nacn koji sam htio al nije lose rijesenje,ako znas
neko bolje prepravi slobodno :D PS. Radi se o prve 3 kartice ,kada smanjivas ekran
ne smanjivaju se bas ponajbolje..
@media screen and (max-width: 850px){
  .boxCard{
    align-items: center;
    margin-top:170px;
    margin-bottom: 60px;
    margin-left: 21%;
    margin-right: 21%;
    }

}

*/

</style>