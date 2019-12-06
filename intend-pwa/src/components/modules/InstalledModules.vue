<template>
    <v-card 
    class="cards"
    min-width="100%">
        <v-layout row wrap>
            <v-flex xs12>
                <v-card-title class="justify-center">Installerede</v-card-title>
            </v-flex>
        </v-layout>
        <v-item-group
            multiple>
                <v-row>
                    <app-page-loader v-if="isLoading"/>
                    <v-col
                    v-else
                    v-for="(item, i) in installedModules"
                    :key="i"
                    cols="6"
                    md="3">
                        <v-lazy
                        v-model="isActive"
                        :options="{
                        threshold: .5
                        }"
                        transition="fade-transition">
                            <InstalledModuleModal :module="item"/>
                        </v-lazy>
                    </v-col>
                </v-row>
        </v-item-group>
    </v-card>
</template>

<script>
import InstalledModuleModal from './dialog/InstalledModuleModal'

export default {
    name: "InstalledModules",
    data () {
        return {
            isActive: false,
            selected: [],
        }
    },
    components: {
        InstalledModuleModal
    },
    computed: {
        installedModules() {
            return this.$store.getters.installedModules
        },
        isLoading() {
            return this.$store.getters.loading
        }
    },
    methods: {}

}
</script>

<style lang="scss" scoped>

    body .container {
        margin: 0;
        padding: 30px 6px 30px 6px;
        max-width: 100%;
    }
</style>