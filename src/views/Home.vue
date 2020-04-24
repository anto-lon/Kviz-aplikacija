<template>
  <main>
        <div class="landing">
            <div class="main-section">
                <div class="intro-text">
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
</style>
