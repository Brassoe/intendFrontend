<template>
    <v-dialog v-model="dialog" >
        <template v-slot:activator="{ on }">
            <v-btn
            absolute
            dark
            fab
            top
            left
            x-small
            v-on="on"
            color="error">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </template>
            <v-card dark>
                <v-card-subtitle class="justify-center"> Ønsker du at slette <strong>{{itemName}}</strong> fra dit køleskab</v-card-subtitle>
                <v-card-actions class="justify-center">
                    <v-btn
                    color="error"
                    text
                    @click="onDeleteParent(index)">
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
        itemName: String,
        index: Number
    },
    data () {
        return {
            dialog: false
        }
    },
    methods: {
        onDeleteParent(index){
            this.$store.dispatch('deleteParent', index)
            this.dialog = false
            
        }
    }

}
</script>