<template>
    <v-container>
        <v-card>
            <v-row>
                <v-col
                v-for="(item, i) in friendsList"
                :key="i"
                cols="4"
                md="3">
                    <v-layout wrap>
                        <v-flex xs12>
                            <FriendDetailsModal :item="item" :index="i"/>
                        </v-flex>
                        <v-flex xs12>
                            <div class="text-center mt-1">{{item.userName}}</div>
                        </v-flex>
                    </v-layout>
                </v-col>
                <v-col
                cols="4"
                md="3">
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-card-actions>
                                <NewFriendModal/>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-col>
            </v-row>    
                
        </v-card>
    </v-container>
</template>

<script>
import NewFriendModal from './dialog/NewFriendModal'
import FriendDetailsModal from './dialog/FriendDetailsModal'
export default {
    name: "Friends",
    components: {
        NewFriendModal,
        FriendDetailsModal
    },
    data() {
        return {
        }
    },
    computed: {
        friendsList() {
            return this.$store.getters.friendsList
        }
    },
    methods: {}

}
</script>

<style lang="scss" scoped>

</style>