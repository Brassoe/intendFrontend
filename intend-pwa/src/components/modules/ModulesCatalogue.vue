<template>
<v-container>
    <v-row class="text-xs-center">
        <span class="sub-heading" >Katalog</span>
        <v-card 
        dark
        class="cards"
        min-width="100%">
                <v-container>
                    <v-item-group
                        v-model="selected"
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
                                            <v-item v-slot:default="{ active, toggle }">
                                                <v-img
                                                :src="item.images[0]"
                                                height="100"
                                                class="text-right pa-2"
                                                @click="onInstall(item.name)">
                                                    <v-btn
                                                    icon
                                                    dark>
                                                    </v-btn>
                                                </v-img>
                                            </v-item>
                                        </v-lazy>
                                    </v-col>
                            </v-row>
                    </v-item-group>
                </v-container>
        </v-card>
    </v-row>
</v-container>
    
</template>

<script>
export default {
    name: "ModulesCatalogue",
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
    },
    methods: {
        onInstall(moduleName){
            this.$store.dispatch('installModule', moduleName)
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