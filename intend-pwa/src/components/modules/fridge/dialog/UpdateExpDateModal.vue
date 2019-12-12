<template>
    <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn
            text
            v-on="on">
                {{child.formatted_expiration_date != undefined ? 'Mht. ' + child.formatted_expiration_date : 'Indsæt udløbsdato'}}
            </v-btn>
        </template>
        <v-date-picker 
        v-model="date"
        locale="da-dk"
        scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
        <v-btn text color="primary" @click="updateExpDate(date, child.id, listIndex, childIndex)">OK</v-btn>
        </v-date-picker>
    </v-dialog>
</template>

<script>
export default {
    props: {
        child: Object,
        listIndex: Number,
        childIndex: Number
    },
    data () {
        return {
            date: new Date().toISOString().substr(0, 10),
            dialog: false,
            
        }
    },
    methods: {
        updateExpDate(date, childId, listIndex, childIndex) {
            this.$store.dispatch('updateItemExpDate', {
                date: date,
                id: childId,
                listIndex: listIndex,
                childIndex: childIndex
            })
            this.dialog = false
        },
    }

}
</script>