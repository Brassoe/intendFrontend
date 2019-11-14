<template>
<v-container>
    <v-row class="text-xs-center">
        <span class="sub-heading" >Intends</span>
        <v-card 
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
                                            <v-item v-slot:default="{ active, toggle }">
                                                <v-img
                                                :src="item.images[0]"
                                                height="120"
                                                class="text-right pa-2"
                                                @click="toggle">
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
    name: "InstalledModules",
    data () {
        return {
            isActive: false,
            items: [
                {
                src: 'backgrounds/bg.jpg',
                },
                {
                src: 'backgrounds/md.jpg',
                },
                {
                src: 'backgrounds/bg-2.jpg',
                },
                {
                src: 'backgrounds/md2.jpg',
                },
            ],
      selected: [],
        }
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