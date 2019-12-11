<template>
  <v-layout wrap>
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
    <v-flex 
    xs12 
    my-5
    mx-3 
    v-if="fridgeItems.length != 0">
        <v-chip
        v-for="item in fridgeCategories" 
        :key="item.id"
        class="my-1 mx-1"
        outlined
        :color="searchCategoryTags.includes(item) ? '#2ecc71' : 'fff'" 
        @click="updateCategorySearchTag(item)">
        {{item}}
        </v-chip>
    </v-flex>
    <v-flex xs12>
        <v-card
        v-for="(item, i) in fridgeItems"
        :key="`item-${i}`"
        class="my-5"
        v-if="searchCategoryTags.includes(item.category_name) || searchCategoryTags.length == 0"
        >
        <AddFridgeCommentModal :comment="item.comment" :parentIndex="i"/>
            <v-layout wrap>
                <v-flex xs12>
                    <v-chip color="success">{{item.category_name}}</v-chip>
                    <v-card-title class="justify-center pt-0">
                        {{item.name}}
                    </v-card-title>
                </v-flex>
                <v-flex xs12 v-if="item.comment != null">
                    <v-card-subtitle>
                        {{item.comment}}
                    </v-card-subtitle>
                </v-flex>
            </v-layout>
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
                    flat>
                        <v-list-item-group multiple>
                            <template v-for="(child, j) in item.children">
                                <v-list-item
                                :key="`child-${j}`">
                                    <template>
                                        <v-list-item-content>
                                            <v-list-item-title>{{item.name}}</v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-content class="py-0">
                                            <UpdateExpDateModal
                                            :child="child"
                                            :listIndex="i"
                                            :childIndex="j"/>
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
import AddFridgeCommentModal from './dialog/AddFridgeCommentModal'
import NewParentItemModal from './dialog/NewParentItemModal'
import UpdateExpDateModal from './dialog/UpdateExpDateModal'

export default {
    components: {
        AddFridgeCommentModal,
        NewParentItemModal,
        UpdateExpDateModal
    },
    data () {
      return {
        
      }
    },
    computed: {
        fridgeItems() {
            return this.$store.getters.fridgeItems
        },
        categories() {
            return this.$store.getters.categories
        },
        fridgeCategories(){
            const fridgeItems = this.fridgeItems
            let fridgeCategories = []
            fridgeItems.forEach(item => {
                if(!fridgeCategories.includes(item.category_name)){
                    fridgeCategories.push(item.category_name)
                }
            });
            return fridgeCategories
        },
        searchCategoryTags() {
            return this.$store.getters.searchCategoryTags
        }
    },
    methods: {
        onAddChild(listIndex, parentId) {
            this.$store.dispatch('addChild', {listIndex: listIndex, parentId: parentId})
        },
        onDeleteChild(listIndex, childIndex, childId) {
            this.$store.dispatch('deleteChild', {listIndex: listIndex, childIndex: childIndex, childId: childId})
        },
        updateCategorySearchTag(searchTag){
            this.$store.dispatch('updateCategorySearchTag', searchTag)
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