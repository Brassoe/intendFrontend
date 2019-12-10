<template>
  <v-layout wrap>
    <v-flex 
    xs12 
    mb-5 
    v-if="fridgeItems.length != 0">
        <v-chip
        v-for="item in fridgeItems" 
        :key="item.id"
        class="my-1 mx-1" 
        outlined 
        color="#fff">{{item.category_name}}</v-chip>
    </v-flex>
    <v-flex xs12>
        <v-card flat color="transparent">
        <v-layout> 
            <v-flex xs12>
                <v-card-actions class="justify-center">
                    <NewParentItemModal :categories="categories"/>
                </v-card-actions>
            </v-flex>
        </v-layout>
    </v-card>
    </v-flex>
    <v-flex xs12>
        <v-card
        v-for="(item, i) in fridgeItems"
        :key="`item-${i}`"
        class="my-5">
        <EditFridgeItem/>
            <v-layout wrap>
                <v-flex xs12 mt->
                        <v-card-title class="justify-center">
                            {{item.name}}
                        </v-card-title>
                </v-flex>
                <v-flex xs12>
                    <v-card-subtitle>{{item.comment}}</v-card-subtitle>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout wrap>
                <v-flex xs12>
                    <v-card-actions class="justify-center">
                        <v-badge overlap>
                            <template v-slot:badge>
                                <div>{{fridgeItems[i].children.length}}</div>
                            </template>
                        <v-btn 
                        text 
                        @click="onAddChild(i, item.id, item.name, item.category)">
                            <v-icon 
                            size="40"
                            color="#76CAB2">
                                mdi-plus-circle
                            </v-icon>
                        </v-btn>
                        </v-badge>
                    </v-card-actions>
                </v-flex>
                <v-flex xs12>
                    <v-list 
                    flat
                    height="30%">
                        <v-list-item-group multiple>
                            <template v-for="(child, j) in item.children">
                                <v-list-item
                                :key="`child-${j}`">
                                    <template>
                                        <v-list-item-content>
                                            <v-list-item-title>{{item.name}}</v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-content v-if="child.formatted_expiration_date != null">
                                            <v-list-item-title>Mht. {{child.formatted_expiration_date}}</v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-content v-else>
                                            <v-dialog
                                                ref="dialog"
                                                v-model="modal"
                                                :return-value.sync="date"
                                                persistent>
                                                <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    label="Vælg udløbsdato"
                                                    readonly
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker 
                                                v-model="date"
                                                locale="da-dk"
                                                scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                                <v-btn text color="primary" @click="updateExpDate(date, child.id, i, j)">OK</v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-icon
                                            color="error"
                                            @click="onDeleteChild(i,j, child.id)">
                                            mdi-delete</v-icon>
                                        </v-list-item-action>
                                    </template>
                                </v-list-item>
                                <v-divider 
                                v-if="j < item.children.length -1"
                                :key="`child-${j}--divider`">
                                </v-divider>
                            </template>
                        </v-list-item-group>
                    </v-list>
                </v-flex>
            </v-layout>
        </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import EditFridgeItem from './dialog/EditFridgeItem'
import NewParentItemModal from './dialog/NewParentItemModal'

export default {
    components: {
        EditFridgeItem,
        NewParentItemModal
    },
    data () {
      return {
        date: new Date().toISOString().substr(0, 10),
        modal: false,
      }
    },
    computed: {
        fridgeItems() {
            return this.$store.getters.fridgeItems
        },
        categories() {
            return this.$store.getters.categories
        }
        
    },
    methods: {
        onAddChild(listIndex, parentId) {
            this.$store.dispatch('addChild', {listIndex: listIndex, parentId: parentId})
        },
        updateExpDate(date, childId, listIndex, childIndex) {
            this.$store.dispatch('updateItemExpDate', {
                date: date,
                id: childId,
                listIndex: listIndex,
                childIndex: childIndex
            })
            this.modal = false
        },
        onDeleteChild(listIndex, childIndex, childId) {
            this.$store.dispatch('deleteChild', {listIndex: listIndex, childIndex: childIndex, childId: childId})
        }
    }
  }
</script>

<style lang="scss">
    .badge-item {
        top: 50%;
        transform: translate(0%, -50%);
    }
</style>