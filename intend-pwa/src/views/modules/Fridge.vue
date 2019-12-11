<template>
      <FridgeItemList/>
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
  beforeMount() {
    this.$store.registerModule('fridgeStore', fridgeStore)
  },
  mounted(){
    this.$store.dispatch('getFridge')
    this.$store.dispatch('getCategories')
  },
  beforeDestroy () {
    this.$store.unregisterModule('fridgeStore')
  },
}
</script>