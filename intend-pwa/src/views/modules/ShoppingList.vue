<template>
    <Lists/>
</template>

<script>
// @ is an alias to /src
import Lists from '@/components/modules/shoppingList/Lists.vue'
import shoppingListStore from '@/store/modules/shoppingList/shoppingListStore.js'
export default {
  beforeMount() {
    this.$store.registerModule('shoppingListStore', shoppingListStore)
  },
  mounted(){
    this.$store.dispatch('getAllLists')
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
