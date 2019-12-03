<template>
  <v-container>
      <h1>Offers!!!!!!!!!!!</h1>
  </v-container>
</template>

<script>
// @ is an alias to /src
import offersStore from '@/store/modules/offers/offersStore.js'


export default {
  name: 'Offers',
  components: {
  },
  created() {
    this.$store.registerModule('offersStore', offersStore)
  },
  beforeDestroy () {
    this.$store.unregisterModule('offersStore')
  },
}
</script>