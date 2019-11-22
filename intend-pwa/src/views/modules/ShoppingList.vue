<template>
  <v-container>
    <Lists/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Lists from '@/components/modules/shoppingList/Lists.vue'
export default {
  name: 'ShoppingList',
  components: {
    Lists: Lists
  },
  created() {
      console.log("hej fra shopping list")
  }
}
</script>