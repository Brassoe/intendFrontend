<template>
  <div class="container">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from './components/navigation/navbar'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import './styling/global.scss';
</style>
