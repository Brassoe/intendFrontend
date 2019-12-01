<template>
    <v-dialog v-model="dialog" >
        <template v-slot:activator="{ on }">
            <v-avatar
            class="friend-avatar"
            size="65"
            v-on="on">
                <img
                :src="item.profileImage"
                alt="profileImage">
            </v-avatar>
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
            <v-layout align-center mb-4>
                <v-flex xs6>
                    <v-avatar
                    class="friend-avatar"
                    size="90">
                        <img
                        :src="item.profileImage"
                        alt="profileImage">
                    </v-avatar>
                </v-flex>
                <v-flex xs6>
                    <div id="friendDetailsContainer">
                    <v-card-title class="py-0 font-weight-thin">{{item.userName}}</v-card-title>
                    <v-card-title class="py-0 font-weight-light">{{item.firstName}} {{item.lastName}}</v-card-title>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12>
                    <v-card-actions class="justify-center">
                        <v-btn
                        fab
                        color="error" 
                        @click="removeFriend(index)">
                        <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        item: Object,
        index: Number
    },
    data () {
        return {
            dialog: false
        }
    },
    methods: {
        removeFriend(index){
            this.$store.dispatch('removeFriend', {index: index})
            this.dialog = false
        }
    }

}
</script>

<style lang="scss">

</style>