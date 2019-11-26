<template>
    <v-dialog v-model="dialog" width="100%" >
        <template v-slot:activator="{ on }">
            <v-btn size="50" fab>
            <v-icon 
            size="40" 
            color="#10ac84"
            v-on="on">
                mdi-playlist-plus
            </v-icon>
            </v-btn>
        </template>
        <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 >
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onListCreate">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="name"
                      label="Navn på listen"
                      id="name"
                      v-model="name"
                      type="text"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                      <v-card-actions class="justify-center">
                        <v-btn
                        type="submit">
                        Opret
                        </v-btn>
                      </v-card-actions>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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