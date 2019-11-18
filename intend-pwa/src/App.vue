<template>
  <v-app>
    <v-container fill-height>
      <router-view/>
    </v-container>
    <v-container>
      <Navbar/>
    </v-container>
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

<style lang="scss">
  @import './styling/global.scss';
</style>
