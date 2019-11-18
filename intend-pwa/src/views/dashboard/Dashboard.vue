<template>
<v-container fill-height>
    <v-layout row wrap align-content-end>
        <MyModules/>
    </v-layout>

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