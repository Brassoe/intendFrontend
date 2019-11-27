<template>
    <v-dialog v-model="dialog" >
        <template v-slot:activator="{ on }">
            <v-btn
            absolute
            dark
            fab
            bottom
            left
            small
            v-on="on"
            color="error">
                <v-icon>mdi-playlist-minus</v-icon>
            </v-btn>
        </template>
        <v-container>
            <v-layout row>
                <v-flex xs12  >
                    <v-card dark>
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-title class="justify-center">{{text}}</v-card-title>
                                <v-card-subtitle>Ønsker du at slette denne liste. Det vil medfører at alle varer på listen også bliver slettet</v-card-subtitle>
                                <v-card-actions class="justify-center">
                                    <v-btn
                                    color="error"
                                    text
                                    @click="onDeleteList(index)">
                                    <v-icon>mdi-delete</v-icon>
                                    Slet
                                    </v-btn>
                                    <v-btn
                                    color="#fff"
                                    text
                                    @click="dialog = false">
                                    <v-icon>mdi-close-circle-outline</v-icon>
                                    Luk
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-dialog>
</template>

<script>
export default {
    props: {
        text: String,
        index: Number
    },
    data () {
        return {
            dialog: false
        }
    },
    methods: {
        onDeleteList(index){
            //store function delete entire list 
            this.$store.dispatch('deleteList', {index: index})
            this.dialog = false
        }
    }

}
</script>