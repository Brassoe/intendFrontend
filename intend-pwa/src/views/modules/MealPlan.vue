<template>
  <v-container>
      <h1>Meal Plan!!!!!!!!!!!</h1>
  </v-container>
</template>

<script>
// @ is an alias to /src
import mealPlanStore from '@/store/modules/mealPlan/mealPlanStore.js'

export default {
  name: 'MealPlan',
  components: {
  },
  created() {
    this.$store.registerModule('mealPlanStore', mealPlanStore)
  },
  beforeDestroy () {
    this.$store.unregisterModule('mealPlanStore')
  },
}
</script>