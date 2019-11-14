<template>
  <v-app>
    <Navbar/>
    <router-view/>
  </v-app>
</template>

<script>
import Navbar from './components/navigation/navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" defer>
  @import './styling/global.scss';
</style>
