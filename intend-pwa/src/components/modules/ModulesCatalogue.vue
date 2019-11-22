<template>
    <v-card 
    light
    class="cards"
    min-width="100%">
    <v-layout row wrap>
        <v-flex xs12>
            <v-card-title class="justify-center">Katalog</v-card-title>
        </v-flex>
    </v-layout>
        <v-item-group
            multiple>
                <v-row>
                        <app-page-loader v-if="isLoading"/>
                        <v-col
                        v-else
                        v-for="(item, i) in moduleCatalogue"
                        :key="i"
                        cols="6"
                        md="3">
                            <v-lazy
                            v-model="isActive"
                            :options="{
                            threshold: .5
                            }"
                            transition="fade-transition">
                                <ModulesCatalogModal :module="item"/>
                            </v-lazy>
                        </v-col>
                </v-row>
        </v-item-group>
    </v-card>
</template>

<script>
import ModulesCatalogModal from './dialog/CatalogModuleModal'
export default {
    name: "ModulesCatalogue",
    components: {
        ModulesCatalogModal
    },
    data () {
        return {
            isActive: false,
      selected: [],
        }
    },
    computed: {
        moduleCatalogue() {
            return this.$store.getters.moduleCatalogue
        },
        isLoading() {
            return this.$store.getters.loading
        }
    }

}
</script>

<style lang="scss" scoped>

    body .container {
        margin: 0;
        padding: 30px 6px 30px 6px;
        max-width: 100%;
    }
</style>