<template>
        <v-progress-circular
        indeterminate
        color="success"
        :width="7"
        :size="70">
        </v-progress-circular>
</template>

<script>
export default {
    name: "PageLoader",
    data() {
        return {
        }
    }

}
</script>

<style lang="scss" scoped>

.v-progress-circular {
  margin: 1rem;
}
</style>