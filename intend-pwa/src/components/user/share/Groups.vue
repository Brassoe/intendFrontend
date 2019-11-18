<template>
    <v-container>
        <v-card>
            <v-list>
            <v-list-item-group>
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                class="mx-5 my-2 tile"
                >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
            <v-row no-gutters>
                <v-spacer></v-spacer>
                <v-btn
                class="ma-1"
                color="#10ac84"
                fab 
                small 
                dark
                @click="">
                <v-icon>mdi-account-plus</v-icon>
                </v-btn>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "Friends",
    data() {
        return {
            items: [
                {
                icon: 'mdi-account-multiple',
                text: 'Gruppe 7',
                },
                {
                icon: 'mdi-account-multiple',
                text: 'Gruppe 6',
                },
                {
                icon: 'mdi-account-multiple',
                text: 'Gruppe 5',
                },
                {
                icon: 'mdi-account-multiple',
                text: 'Gruppe 4',
                },
            ],
        }
    }

}
</script>

<style>

</style>