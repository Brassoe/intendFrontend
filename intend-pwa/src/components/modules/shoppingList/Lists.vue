<template>
<v-container>
    <v-card>
        <v-layout row> 
            <v-flex xs12>
                <v-card-title class="justify-center">
                    <newListModal/>
                </v-card-title>
            </v-flex>
        </v-layout>
    </v-card>
    <v-spacer></v-spacer>
    <v-card
    color="#f5f6fa"
    v-for="(list, i) in lists" :key="i">
        <v-layout row>
            <v-flex xs12>
                <v-card-title class="justify-center">{{list.name}}</v-card-title>
            </v-flex>
            <v-flex>
                <v-card-actions class="justify-center">
                    <v-btn medium color="error" text fab>
                        <v-icon
                        medium
                        @click="onDeleteList(i)">
                        mdi-playlist-minus</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-flex>
        </v-layout>
        <v-list
        color="#f5f6fa">
            <v-list-item-group multiple>
                <template v-for="(item, j) in list.items">
                    <v-list-item
                    :key="`item-${j}`"
                    :value="item"
                    @click="itemOnClick(item, j)">
                        <template v-slot:default="{ active, toggle }">
                            <v-list-item-content v-if="item != ''">
                                <v-list-item-title v-text="item"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content v-else>
                                <v-text-field
                                autofocus
                                placeholder="Indsæt navn">
                                </v-text-field>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-layout row>
                                    <v-flex>
                                        <v-checkbox
                                        :input-value="active"
                                        :true-value="item"
                                        color="#10ac84"
                                        @click="toggle">
                                        </v-checkbox>
                                    </v-flex>
                                    <v-flex ml-3>
                                        <v-icon
                                        color="error"
                                        @click="onDeleteItem(i,j)">
                                        mdi-delete</v-icon>
                                    </v-flex>
                                </v-layout>
                            </v-list-item-action>
                        </template>
                    </v-list-item>
                </template>
                    <v-list-item
                    :key="`item-${i}-end`"
                    @click="onNewItemClick(i)">
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-title class="justify-center">
                                    <v-icon color="#10ac84">mdi-plus-circle-outline</v-icon>
                                </v-card-title>
                            </v-flex>
                        </v-layout>
                    </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</v-container>
</template>

<script>
import newListModal from './dialog/newListModal'

export default {
    name: "Lists",
    components: {
        newListModal
    },
    data () {
        return {}
    },
    computed: {
        lists () {
            return this.$store.getters.ShoppingLists
        }
    },
    methods: {
        itemOnClick(item, itemId) {
            //Store function check/uncheck
        },
        onNewItemClick(index){
            this.$store.dispatch('addListItem', index)
        },
        onDeleteItem(ListIndex, itemIndex) {
            //TODO - SEND ITEM ID 
            this.$store.dispatch('deleteListItem', {ListIndex: ListIndex, ItemIndex: itemIndex})
        },
        onDeleteList(index){
            //store function delete entire list 
            this.$store.dispatch('deleteList', {index: index})
            //this.lists.splice([index], 1)
        }
    }
}
</script>
