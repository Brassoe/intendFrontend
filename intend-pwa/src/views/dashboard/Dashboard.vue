<template>
  <v-container>
    <v-row>
    <span class="sub-heading mt-6">Dashboard</span>
    </v-row>
    <MyModules/>
  </v-container>
  

</template>

<script>
// @ is an alias to /src
import MyModules from '@/components/dashboard/MyModules.vue'

export default {
  name: 'Dashboard',
  components: {
    MyModules
  }
}
</script>

<style lang="scss" scoped>

</style>