<template>
<v-container fluid>
  <div class="container">
    <Navbar/>
    <router-view/>
  </div>


</v-container>
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
