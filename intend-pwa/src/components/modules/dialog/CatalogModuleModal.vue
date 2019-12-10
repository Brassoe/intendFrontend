<template>
    <v-dialog v-model="dialog" >
        <template v-slot:activator="{ on }">
            <v-btn 
            class="px-10 catalog-show-more-btn"
            v-on="on"
            color="#10ac84">
                <v-icon> mdi-arrow-right</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-layout>
                <v-flex xs12> 
                    <v-btn
                    class="modal-close-btn"
                    text
                    x-small
                    color="error"
                    @click="dialog = false">
                        <v-icon>mdi-close-circle-outline</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
                <v-layout
                class="modalModuleContainer">
                    <v-flex xs12>
                        <div class="modal-container">
                            <v-badge
                            color="teal"
                            right
                            :overlap="false"
                            class="modal-catalogTag">
                            <template v-slot:badge>
                                <v-icon>mdi-tag</v-icon>
                            </template>
                                <div class="title font-weight-thin">{{module.category}}</div>
                            </v-badge>
                            <div class="display-1 font-weight-light">{{module.display_name}}</div>
                            <div class="display-1 font-weight-thin">{{module.price}},-</div>
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <div class="body-1 font-weight-light module-description">{{module.description}}</div>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-card-actions class="justify-center mt-10">
                            <v-btn
                            class="install-button" 
                            fab
                            color="#10ac84" 
                            @click="onInstall">
                            <v-icon>mdi-download</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                         <v-carousel
                         height="200"
                         cycle
                         hide-delimiters
                         :show-arrows="false">
                            <v-carousel-item
                            v-for="item in module.images"
                            :key="item"
                            :src="item"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-flex>
                </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['module'],
    data () {
        return {
            dialog: false

        }
    },
    methods: {
        onInstall() {
            this.$store.dispatch('installModule', {name: this.module.name, router: this.$router})
            this.dialog = false
        }
    }

}
</script>

<style lang="scss">
    .modalModuleContainer {
        padding: 40px 0px 0px 0px;
        margin-left: 5%
    }
    .module-description {
        margin-top: 20px;
        margin-left: 5%
    }
    


</style>