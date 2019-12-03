<template>
    <v-dialog v-model="dialog" width="100%" >
        <template v-slot:activator="{ on }">
            <v-img
            :src="module.images[0]"
            height="100"
            class="text-right pa-2"
            v-on="on">
            </v-img>
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
                            <div class="title font-weight-thin">Planlægning</div>
                        </v-badge>
                        <div class="display-1 font-weight-light">{{module.name}}</div>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12>
                    <v-card-text>
                        {{module.description}}
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12>
                    <v-card-actions class="justify-center mt-10">
                        <v-btn
                        class="install-button" 
                        fab
                        color="error" 
                        @click="onUninstall">
                        <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-card-actions>
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
        onUninstall() {
            this.$store.dispatch('deleteModule', this.module.name)
            this.dialog = false
        }
    }

}
</script>