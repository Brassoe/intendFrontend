<template>
    
</template>

<script>
import editProfileInfoModla from './dialog/editProfileInfoModal'
export default {
    name: "Presentation",
    components: {
        editProfileInfoModla
    },
    data() {
        return {
        }
    },
    computed: {
        userInfo() {
      return this.$store.getters.user
    }
    }

}
</script>

<style lang="scss" scoped>

    .tile {
        border-radius: 5px;
    }

</style>