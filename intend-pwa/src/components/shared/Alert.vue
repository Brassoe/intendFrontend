<template>
        <v-alert
        v-if="error"
        @input="onClose"
        :value="true"
        type="error"
        dark
        dismissible>
        {{error}}
        </v-alert>
</template>

<script>
export default {
    computed: {
        error() {
            return this.$store.getters.errorMessage
        }
    },
    methods: {
        onClose() {
            this.$emit('dismissed')
        }
    }

}
</script>

<style>

</style>