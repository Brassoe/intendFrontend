<template>
<v-card>
    <v-layout row>
        <v-flex xs12>
            <v-icon size="60" color="#10ac84">mdi-plus-circle</v-icon>
        </v-flex>
    </v-layout>
    <v-divider></v-divider>
            <v-list>
                <v-list-item-group
                v-model="model"
                multiple>
                    <template v-for="(item, i) in items">
                    <v-list-item
                        :key="`item-${i}`"
                        :value="item"
                        active-class="deep-purple--text text--accent-4">
                        <template v-slot:default="{ active, toggle }">
                        <v-list-item-content>
                            <v-list-item-title v-text="item"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-checkbox
                            :input-value="active"
                            :true-value="item"
                            color="deep-purple accent-4"
                            @click="toggle"
                            ></v-checkbox>
                        </v-list-item-action>
                        </template>
                    </v-list-item>
                    </template>
                </v-list-item-group>
            </v-list>

</v-card>
</template>

<script>
export default {
    name: "Lists",
    data () {
        return {
            items: [
        'Dog Photos',
        'Cat Photos',
        'Potatoes',
        'Carrots',
      ],
      model: ['Carrots'],
        }
    }
}
</script>
