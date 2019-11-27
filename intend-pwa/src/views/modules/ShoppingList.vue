<template>
    <Lists/>
</template>

<script>
// @ is an alias to /src
import Lists from '@/components/modules/shoppingList/Lists.vue'
import shoppingListStore from '@/store/modules/shoppingList/shoppingListStore.js'
export default {
  created() {
    this.$store.registerModule('shoppingListStore', shoppingListStore)
  },
  beforeDestroy () {
    this.$store.unregisterModule('shoppingListStore')
  },
  name: 'ShoppingList',
  components: {
    Lists: Lists
  },
}
</script>