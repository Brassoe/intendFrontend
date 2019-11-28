<template>
<v-container>
    <v-card flat color="transparent">
        <v-layout row> 
            <v-flex xs12>
                <v-card-actions class="justify-center mb-12">
                    <newListModal/>
                </v-card-actions>
            </v-flex>
        </v-layout>
    </v-card>
    <v-card
    v-for="(list, i) in lists" :key="i"
    class="mb-12"
    :color="list.color">
        <deleteListModal :text="list.name" :index="i"/>
        <shareListModal :text="list.name"/>
        <pickColorModal :index="i"/>
        <v-layout row>
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
                    @click="flipCheck(i, j)">
                        <template>
                            <v-list-item-content v-if="item.name != ''">
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content v-else>
                                <v-text-field
                                @keydown.enter="onSaveItem(i, j)"
                                autofocus
                                v-model="itemName"
                                placeholder="Indsæt navn">
                                </v-text-field>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-layout row >
                                    <v-flex v-if="item.name != ''">
                                        <v-checkbox
                                        v-model="item.checked"
                                        color="#10ac84"
                                        @click="flipCheck(i, j)">
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
                    <v-divider :key="`item-${j}--divider`"></v-divider>
                </template>
                    <v-list-item
                    :key="`item-${i}-end`"
                    @click="onNewItemClick(i)">
                        <v-layout row>
                            <v-flex xs12>
                                <v-card-title class="justify-center">
                                    <v-icon color="#000">mdi-plus-circle-outline</v-icon>
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
        }
    },
    methods: {
        flipCheck(listIndex, itemIndex) {
            //Store function check/uncheck
            this.$store.dispatch('flipCheck', {listIndex: listIndex, itemIndex: itemIndex})
        },
        onNewItemClick(index){
            this.$store.dispatch('addTmpListItem', index)
        },
        onSaveItem(listIndex, itemIndex) {
            this.$store.dispatch('saveItem', {
                itemName: this.itemName, 
                listIndex: listIndex, 
                itemIndex: itemIndex
                })
            this.itemName = null;
        },
        onDeleteItem(ListIndex, itemIndex) {
            //TODO - SEND ITEM ID 
            this.$store.dispatch('deleteListItem', {ListIndex: ListIndex, ItemIndex: itemIndex})
        }
    }
}
</script>

