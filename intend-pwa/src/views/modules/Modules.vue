<template>
  <v-container>
      <ModulesCatalog/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ModulesCatalog from '@/components/modules/ModulesCatalog.vue'

export default {
  name: 'Modules',
  components: {
    ModulesCatalog,
  },
  created(){
    this.$store.dispatch('getCatalog')
  }
}
</script>

<style lang="scss" scoped>
  .moduleContainer {
    margin-top: 50px;
  }
</style>