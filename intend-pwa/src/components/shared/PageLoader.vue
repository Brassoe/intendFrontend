<template>
    <v-progress-circular
        class="pageLoader"
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
  margin-top: 50%;
  margin-left: 50%;
  transform: translate(-50%, -50%);
}
</style>