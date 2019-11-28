<template>
    <v-dialog v-model="dialog" >
        <template v-slot:activator="{ on }">
            <v-btn
            absolute
            dark
            fab
            top
            right
            small
            v-on="on"
            color="primary">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </template>
            <v-card dark>
                <v-card-title class="justify-center"></v-card-title>
                <v-card-actions class="justify-center">
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
    props: [],
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