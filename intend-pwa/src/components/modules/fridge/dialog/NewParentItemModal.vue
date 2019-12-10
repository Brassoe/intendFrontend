<template>
    <v-dialog v-model="dialog" >
        <template v-slot:activator="{ on }">
            <v-btn
            dark
            fab
            medium
            v-on="on"
            color="#76CAB2">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
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
                 <v-card-text>
                    <v-container>
                        <form @submit.prevent="onCreateParent">
                            <v-chip 
                            v-for="item in categories" 
                            :key="item.id"
                            outlined
                            :color="isSelected(item)"
                            class="my-1 mx-1"  
                            @click="category = item ">
                            {{item.name}}
                            </v-chip>
                            <v-text-field
                            name="name"
                            placeholder="Varenavn"
                            id="name"
                            v-model="name"
                            type="text"
                            required>
                            </v-text-field>
                            <v-card-actions class="justify-center">
                                <v-btn
                                text
                                color="green"
                                type="submit">
                                <v-icon>mdi-plus</v-icon>
                                Opret
                                </v-btn>
                            </v-card-actions>
                        </form>
                    </v-container>
                </v-card-text>
            </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        categories: Array
    },
    data () {
        return {
            name: null,
            dialog: false,
            category: null
            
        }
    },
    methods: {
        onCreateParent(){
            this.$store.dispatch('createParent', {name: this.name, category_id: this.category.id, category_name: this.category.name})
            this.name = null
            this.category = null
            this.dialog = false
            
        },
        isSelected(item) {
            if(this.category != null && this.category.name == item.name) {
                return '#2ecc71'
            }
        }
    }

}
</script>