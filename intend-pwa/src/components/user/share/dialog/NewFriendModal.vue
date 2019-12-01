<template>
    <v-dialog v-model="dialog" >
        <template v-slot:activator="{ on }">
            <v-btn
            class="ma-1"
            color="#10ac84"
            large
            fab 
            dark
            v-on="on"
            @click="addFriend">
                <v-icon size="30">mdi-account-search</v-icon>
            </v-btn>
        </template>
        <v-card>
            
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data () {
        return {
            dialog: false

        }
    },
    methods: {
        addFriend() {

        }
    }

}
</script>

<style lang="scss">
    .friend-avatar {
        left: 50%;
        transform: translate( -50%);
    }
</style>