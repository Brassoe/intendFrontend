<template>
    <v-dialog v-model="dialog" width="100%" >
        <template v-slot:activator="{ on }">
            <v-btn 
            absolute
            top
            right
            x-small
            color="#76CAB2" 
            fab>
            <v-icon 
            size="20" 
            color="#fff"
            v-on="on">
                mdi-pencil
            </v-icon>
            </v-btn>
        </template>
        <v-card dark>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data () {
        return {
            name: '',
            dialog: false
        }
    },
    methods: {
        onListCreate() {
           this.$store.dispatch('addList', {name: this.name})
           this.dialog = false
        }
    }

}
</script>