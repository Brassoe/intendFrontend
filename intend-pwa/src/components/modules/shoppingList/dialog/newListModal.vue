<template>
    <v-dialog v-model="dialog" width="100%" >
        <template v-slot:activator="{ on }">
            <v-btn 
            absolute
            top
            color="#E4A953" 
            size="50" 
            fab>
            <v-icon 
            size="40" 
            color="#fff"
            v-on="on">
                mdi-playlist-plus
            </v-icon>
            </v-btn>
        </template>
        <v-card dark>
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
          <v-card-text>
            <v-container>
              <form @submit.prevent="onListCreate">
                <v-text-field
                  name="name"
                  placeholder="Navn på listen"
                  id="name"
                  v-model="name"
                  type="text"
                  required>
                </v-text-field>
                <v-card-actions class="justify-center">
                  <v-btn
                  text
                  color="green"
                  type="submit">
                  <v-icon>mdi-playlist-plus</v-icon>
                  Opret
                  </v-btn>
                </v-card-actions>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data () {
        return {
            name: '',
            dialog: false
        }
    },
    methods: {
        onListCreate() {
           this.$store.dispatch('addList', {name: this.name})
           this.dialog = false
        }
    }

}
</script>