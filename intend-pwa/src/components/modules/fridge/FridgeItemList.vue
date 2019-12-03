<template>
  <v-layout wrap>
    <v-flex xs12>
        <v-text-field
        name="search"
        placeholder="Søg"
        @keydown.enter="yourFunction"
        id="search"
        type="text"
        required>
        </v-text-field>
    </v-flex>
    <v-flex xs12 mb-5>
        <v-chip 
        v-for="item in fridgeItems" 
        :key="item.id"
        class="my-1 mx-1" 
        outlined 
        color="#fff">{{item.category}}</v-chip>
    </v-flex>
    <v-flex xs12>
        <v-card
        v-for="(item, i) in fridgeItems"
        :key="`item-${i}`"
        class="my-5">
        <EditFridgeItem/>
        <DeleteFridgeItem :index="i" :itemName="item.name"/>
            <v-layout wrap>
                <v-flex xs8>
                    <v-badge class="badge-item">
                        <template v-slot:badge>
                            <div>{{item.amount}}</div>
                        </template>
                        <v-card-title class="py-0 px-0 ml-4">
                            {{item.name}}
                        </v-card-title>
                    </v-badge>
                </v-flex>
                <v-flex xs4>
                    <v-card-subtitle>udløber d. {{item.expires}}</v-card-subtitle>
                </v-flex>
                <v-flex xs12>
                    <v-card-subtitle>{{item.comment}}</v-card-subtitle>
                </v-flex>
            </v-layout>
        </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import EditFridgeItem from './dialog/EditFridgeItem'
import DeleteFridgeItem from './dialog/DeleteFridgeItem'

export default {
    components: {
        EditFridgeItem,
        DeleteFridgeItem
    },
    data () {
      return {
        
      }
    },
    computed: {
        fridgeItems() {
            return this.$store.getters.fridgeItems
        }
    },
    methods: {
        onItemClick(){
            console.log("hej")
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