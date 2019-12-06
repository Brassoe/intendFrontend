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
            <v-card dark>
                <v-card-title class="justify-center">{{text}}</v-card-title>
                <v-card-subtitle>Ønsker du at slette denne liste. Det vil medfører at alle varer på listen også bliver slettet</v-card-subtitle>
                <v-card-actions class="justify-center">
                    <v-btn
                    color="error"
                    text
                    @click="onDeleteList(index, listId)">
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
            </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        text: String,
        index: Number,
        listId: Number
    },
    data () {
        return {
            dialog: false
        }
    },
    methods: {
        onDeleteList(index, listId){
            //store function delete entire list 
            this.$store.dispatch('deleteList', {index: index, listId: listId})
            this.dialog = false
        }
    }

}
</script>