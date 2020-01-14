<template>
<v-container px-0>
    <v-card flat color="transparent">
        <v-layout> 
            <v-flex xs12>
                <v-card-actions class="justify-center mb-12">
                    <newListModal/>
                </v-card-actions>
            </v-flex>
        </v-layout>
    </v-card>
    <app-page-loader v-if="isLoading"/>
    <v-card
    v-else
    v-for="(list, i) in lists" :key="i"
    class="mb-12"
    :color="list.color">
        <deleteListModal :text="list.name" :index="i" :listId="list.id"/>
        <shareListModal :text="list.name"/>
        <pickColorModal :index="i" :listId="list.id"/>
        <v-layout>
            <v-flex xs12>
                <v-card-title class="justify-center">{{list.name}}</v-card-title>
            </v-flex>
        </v-layout>
        <v-list
        :color="list.color"
        flat>
            <v-list-item-group multiple>
                <template v-for="(item, j) in list.items">
                    <v-list-item
                    :key="`item-${j}`" 
                    v-touch="{left: () => item.checked ? sendToFridge(i, j, item) : ''}">
                        <template>
                            <v-list-item-content v-if="item.name != ''">
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content v-else>
                                <v-text-field
                                @keydown.enter="onSaveItem(i, j, list.id)"
                                autofocus
                                v-model="itemName"
                                placeholder="Indsæt navn">
                                </v-text-field>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-layout row >
                                    <v-flex v-if="item.name != ''">
                                        <v-icon
                                        v-if="!item.checked"
                                        @click="flipCheck(i, j, item.id)">
                                            mdi-checkbox-blank-circle-outline
                                        </v-icon>
                                        <v-icon
                                        v-else
                                        @click="flipCheck(i, j, item.id)">
                                            mdi-checkbox-marked-circle
                                        </v-icon>
                                    </v-flex>
                                    <v-flex ml-3>
                                        <v-icon
                                        color="error"
                                        @click="onDeleteItem(i,j, item.id)">
                                        mdi-delete</v-icon>
                                    </v-flex>
                                </v-layout>
                            </v-list-item-action>
                        </template>
                    </v-list-item>
                    <v-divider :key="`item-${j}--divider`"></v-divider>
                </template>
                    <v-list-item
                    :key="`item-${i}-end`"
                    @click="onNewItemClick(i)">
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-title class="justify-center">
                                    <v-icon>mdi-plus-circle-outline</v-icon>
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
import deleteListModal from './dialog/deleteListModal'
import shareListModal from './dialog/shareListModal'
import pickColorModal from './dialog/pickColorModal'

export default {
    name: "Lists",
    components: {
        newListModal,
        deleteListModal,
        shareListModal,
        pickColorModal
    },
    data () {
        return {
            itemName: null
        }
    },
    computed: {
        lists () {
            return this.$store.getters.ShoppingLists
        },
        isLoading() {
            return this.$store.getters.loading
        }
    },
    methods: {
        flipCheck(listIndex, itemIndex, itemId) {
            this.$store.dispatch('flipCheck', {listIndex: listIndex, itemIndex: itemIndex, itemId: itemId})
        },
        onNewItemClick(index){
            this.$store.dispatch('addTmpListItem', index)
        },
        onSaveItem(listIndex, itemIndex, listId) {
            this.$store.dispatch('saveItem', {
                itemName: this.itemName, 
                listIndex: listIndex, 
                itemIndex: itemIndex,
                listId: listId
                })
            this.itemName = null;
        },
        onDeleteItem(listIndex, itemIndex, itemId) {
            this.$store.dispatch('deleteListItem', {listIndex: listIndex, itemIndex: itemIndex, itemId: itemId})
        },
        sendToFridge(listIndex, itemIndex, item) {
            //TODO - Send to board (Rep. architecture)
            console.log(item)
            this.$store.dispatch('postItem', {
                listIndex: listIndex,
                itemIndex: itemIndex,
                item: item
            })
            console.log("POSTED ITEM")
            this.onDeleteItem(listIndex, itemIndex, item.id)
        }
    }
}
</script>

