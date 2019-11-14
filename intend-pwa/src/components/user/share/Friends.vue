<template>
<v-container>
     <span class="heading">Venner</span>
     <v-btn 
     fab 
     small 
     light 
     style="margin: 5px 5px 10px 5px;"
     @click="">
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
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
    name: "Friends",
    data() {
        return {
            items: [
                {
                icon: 'mdi-account-circle',
                text: 'Ole',
                },
                {
                icon: 'mdi-account-circle',
                text: 'Ditte',
                },
                {
                icon: 'mdi-account-circle',
                text: 'Cecilie',
                },
                {
                icon: 'mdi-account-circle',
                text: 'Christian',
                },
            ],
        }
    }

}
</script>

<style>

</style>