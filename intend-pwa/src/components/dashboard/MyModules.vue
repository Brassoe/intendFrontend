<template>
    <v-container>
        <v-row class="text-xs-center">
            <span class="body-text">Mine moduler</span>
        </v-row>
        <app-page-loader v-if="isLoading"/>
        <v-slide-group v-else multiple>
        <v-slide-item
            v-for="n in 25"
            :key="n">
                <v-card
                style="margin: 0px 5px 0px 5px"
                height="100"
                width="100"
                img="https://picsum.photos/200/300"
                @click="">
                </v-card>
        </v-slide-item>
        </v-slide-group>
    </v-container>
</template>

<script>
export default {
    name: "MyModules",
    data () {
        return {}
    },
    computed: {
        installedModules() {
            console.log(this.$store.getters.installedModules)
            return this.$store.getters.installedModules
        },
        isLoading() {
            return this.$store.getters.loading
        }
    },
}
</script>

<style lang="scss" scoped>
    body .container {
        margin: 0;
        padding: 10px 6px 10px 6px;
        min-width: 100%;
    }
</style>
