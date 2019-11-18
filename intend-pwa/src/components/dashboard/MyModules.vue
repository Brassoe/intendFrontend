<template>
    <v-layout row align-content-end> 
        <v-flex xs12 md4 v-if="isLoading">
            <app-page-loader/>
        </v-flex>
        <v-flex xs12 md4 v-else>
                <v-slide-group
                class="moduleSlider"
                multiple>
                    <v-slide-item
                        v-for="n in 25"
                        :key="n">
                            <v-card
                            class="mx-1"
                            height="100"
                            width="100"
                            img="https://picsum.photos/200/300"
                            click="">
                            </v-card>
                    </v-slide-item>
                </v-slide-group>
        </v-flex>
    </v-layout>

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
    .moduleSlider {
        margin-bottom: 20px;
    }
</style>
