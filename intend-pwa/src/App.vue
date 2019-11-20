<template>
  <v-app>
    <v-container v-if="userIsAuthenticated">
      <Header/>
    </v-container>
    <v-container fill-height>
      <router-view/>
    </v-container>
    <v-container>
      <Navbar/>
    </v-container>
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
