<template>
    <div class="header dropdownFix" >
      <b-navbar toggleable="lg" type="dark"  variant="warning" class="transparent">
        <b-navbar-brand href="#">Don Quizotee</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/" class="link">Home</router-link>
            <router-link to="/about" class="link">About</router-link>
            <router-link to="/singleplayer" class="link">Singleplayer</router-link>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
              <router-link to="/login" class="link">Login</router-link>
              <router-link to="/register" class="link">Register</router-link>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
</template>

<style scoped>
  .dropdownFix{
    position:fixed;
    width: 100vw;
  }

  .link{
    color: white;
    margin: 0 1em;
    text-decoration: none;
  }

  .navbar-brand{
      font-size: 24px;
      text-transform: uppercase;
    }
  a{
    font-size: 16px;
  }

  @media only screen and (min-width: 990px) {
    .dropdownFix{
      position: relative;
    }

    .header{
      width: 80%;
      margin: auto;
    }
     .transparent{
      background-color: transparent !important;
    }
    .navbar-brand{
      color: #f5ed00!important;
      font-size: 30px;
      text-transform: uppercase;
    }
    a{
      color: #f5ed00!important;
      font-size: 22px;
    }
}
  

</style>
      