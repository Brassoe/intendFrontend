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
        <v-card dark>
                <v-layout row>
                    <v-flex xs12>
                         <v-carousel
                         height="200"
                         cycle
                         hide-delimiters>
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
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title class="justify-center">{{module.name}}</v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            {{module.description}}
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions class="justify-center">
                            <v-btn text color="error" @click="onUninstall">Afinstaller</v-btn>
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
            //this.$store.dispatch('deleteModule', {name: this.module.name, router: this.$router})
            this.dialog = false
        }
    }

}
</script>