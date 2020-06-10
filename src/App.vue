<template>
  <div id="app">
    <Navbar :key="$route.fullPath"/>
    <vue-snotify></vue-snotify>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default{
  components: {
    Navbar
  },
}

</script>

<style>

</style>
