<template>
<v-container>

     <span class="heading">Grupper</span>
    <v-card
    class="mx-auto"
    max-width="500">
        <v-list>
        <v-list-item-group>
            <v-list-item
            v-for="(item, i) in items"
            :key="i"
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
    </v-card>
</v-container>
</template>

<script>
export default {
    name: "Groups",
    data() {
        return {
            items: [
                {
                icon: 'mdi-account-multiple-outline',
                text: 'Gruppe 7',
                }
            ],
        }
    }

}
</script>

<style>

</style>