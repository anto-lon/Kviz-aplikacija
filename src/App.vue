<template>
  <div id="app">
    <Navbar :key="$route.fullPath"/>
    <vue-snotify></vue-snotify>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default{
  components: {
    Navbar,
    Footer
  },
}

</script>

<style>

</style>
