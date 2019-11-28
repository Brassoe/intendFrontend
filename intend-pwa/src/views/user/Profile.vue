<template>
  <v-container >
    <InstalledModules/>
  </v-container>
  

</template>

<script>
// @ is an alias to /src
import presentation from '@/components/user/profilePage/Presentation'
import profileDetails from '@/components/user/profilePage/ProfileDetails'
import InstalledModules from '@/components/modules/InstalledModules.vue'

export default {
  name: 'Profile',
  components: {
    presentation,
    profileDetails,
    InstalledModules
  }
}
</script>

<style lang="scss" scoped>

</style>