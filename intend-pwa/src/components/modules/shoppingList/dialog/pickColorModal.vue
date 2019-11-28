<template>
    <v-dialog v-model="dialog" >
        <template v-slot:activator="{ on }">
            <v-btn
            absolute
            dark
            fab
            top
            left
            small
            v-on="on"
            color="purple">
                <v-icon>mdi-format-color-fill</v-icon>
            </v-btn>
        </template>
            <v-card dark>
                <v-card-title class="justify-center">Vælg en farve</v-card-title>
                <v-color-picker
                v-model="color"
                hide-canvas
                hide-inputs
                hide-mode-switch
                mode.sync="hexa"
                show-swatches
                :swatches="swatchColors"
                class="mx-auto"
                flat
                ></v-color-picker>
                <v-divider></v-divider>
                <v-card-actions class="justify-center">
                <v-btn
                color="success"
                text
                @click="onColorChange(index)">
                <v-icon>mdi-format-color-fill</v-icon>
                Opdater
                </v-btn>
                <v-btn
                color="#fff"
                text
                @click="dialog = false">
                <v-icon>mdi-close-circle-outline</v-icon>
                Luk
                </v-btn>
            </v-card-actions>
            </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['index'],
    data () {
        return {
            dialog: false,
            color: '',
            swatchColors: [
                ['#dff9fb', '#c7ecee', '#95afc0'],
                ['#FFFF00', '#AAAA00', '#e67e22'],
                ['#00FF00', '#00AA00', '#009432'],
                ['#9980FA', '#9b59b6', '#e056fd'],
                ['#0000FF', '#0000AA', '#4834d4'],
            ]
        }
    },
    methods: {
        onColorChange(index){
            //store function delete entire list 
            this.$store.dispatch('updateColor', {index: index, color: this.color})
            this.dialog = false
        }
    }

}
</script>

<style lang="scss">
    .v-color-picker__controls {
        display: none;
    }

</style>