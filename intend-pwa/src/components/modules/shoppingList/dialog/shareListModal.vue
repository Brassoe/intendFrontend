<template>
    <v-dialog v-model="dialog" >
        <template v-slot:activator="{ on }">
            <v-btn
            absolute
            dark
            fab
            bottom
            right
            small
            v-on="on"
            color="primary">
                <v-icon>mdi-account-multiple-outline</v-icon>
            </v-btn>
        </template>
            <v-card dark>
                        <v-card-title class="justify-center">{{text}} bliver delt med</v-card-title>
                <v-divider></v-divider>
                        <v-list flat>
                            <v-list-item-group v-model="model">
                                <v-list-item
                                v-for="(item, i) in items"
                                :key="i">
                                    <v-list-item-icon>
                                        <v-icon color="#E4A953">mdi-account</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.text"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                <v-divider></v-divider>
                        <v-card-actions class="justify-center">
                            <v-btn
                            color="green"
                            text
                            @click="dialog = false">
                                <v-icon>mdi-account-plus</v-icon>
                            Tilføj
                            </v-btn>
                            <v-btn
                            color="error"
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
        index: Number
    },
    data () {
        return {
            dialog: false,
            items: [
                {
                text: 'Christian',
                },
                {
                text: 'Ditte',
                },
                {
                text: 'Cecilie',
                },
                {
                text: 'Ole',
                },
            ],
            model: 1,
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