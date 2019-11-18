<template>
  <v-container>
      <InstalledModules class="moduleContainer"/>
      <ModulesCatalogue class="moduleContainer"/>
  </v-container>
  

</template>

<script>
// @ is an alias to /src
import InstalledModules from '@/components/modules/InstalledModules.vue'
import ModulesCatalogue from '@/components/modules/ModulesCatalogue.vue'

export default {
  name: 'Modules',
  components: {
    InstalledModules,
    ModulesCatalogue
  },
  created(){
    this.$store.dispatch('getInstalledModules', 1)
  }
}
</script>

<style lang="scss" scoped>
  .moduleContainer {
    margin-top: 50px;
  }
</style>