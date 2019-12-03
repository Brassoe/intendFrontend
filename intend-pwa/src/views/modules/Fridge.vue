<template>
  <v-container>
      <FridgeItemList/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import fridgeStore from '@/store/modules/fridge/fridgeStore.js'
import FridgeItemList from '@/components/modules/fridge/FridgeItemList'

export default {
  name: 'Fridge',
  components: {
    FridgeItemList
  },
  created() {
    this.$store.registerModule('fridgeStore', fridgeStore)
  },
  beforeDestroy () {
    this.$store.unregisterModule('fridgeStore')
  },
}
</script>