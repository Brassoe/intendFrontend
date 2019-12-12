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
                mdi-comment-text-outline
            </v-icon>
            </v-btn>
        </template>
        <v-card dark>
            <v-layout wrap>
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
            <v-layout wrap>
                <v-flex xs12>
                    <v-container fluid>
                        <v-textarea
                        v-model="updatedComment"
                        outlined
                        clearable
                        placeholder="Indsæt en kommentar"
                        clear-icon="mdi-delete"
                        ></v-textarea>
                        <v-card-actions class="justify-center">
                            <v-btn
                            outlined
                            rounded
                            color="green"
                            @click="onUpdateComment">
                            Indsæt
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        item: Object,
        parentIndex: Number
    },
    data () {
        return {
            updatedComment: '',
            dialog: false
        }
    },
    watch: {
        dialog: function() {
            this.updatedComment = null
        }
    },
    methods: {
        onUpdateComment() {
            this.$store.dispatch('fridgeAddComment', {
                comment: this.updatedComment,
                id: this.item.children[0].id, 
                parentIndex: this.parentIndex
                })
            this.dialog = false
        }
    },


}
</script>