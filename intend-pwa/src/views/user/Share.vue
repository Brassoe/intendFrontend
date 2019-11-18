<template>
  <v-container>
    <Friends/>
    <Groups/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Friends from '@/components/user/share/Friends.vue'
import Groups from '@/components/user/share/Groups.vue'

export default {
  name: 'Share',
  components: {
      Friends,
      Groups
  }
}
</script>

<style lang="scss" scoped>

</style>