<template>
  <v-app>
    <v-content>
      <!-- Header only for authenticated users -->
        <Header v-if="userIsAuthenticated"/>
      <!-- Basic router view -->
        <router-view/>
      <!-- Bottom toolbar -->
        <Navbar/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/navigation/Header'
import Navbar from './components/navigation/navbar'

export default {
  name: 'App',
  components: {
    Navbar,
    Header
  },
  computed: {
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
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
