<template>
<v-container>
  <v-row>
    <span class="sub-heading">Katalog</span>
      <v-card
      class="cards"
      min-width="100%">
          <v-container class="pa-1">
          <v-item-group
              v-model="selected"
              multiple>
                  <v-row>
                          <v-col
                          v-for="(item, i) in items"
                          :key="i"
                          cols="6"
                          md="3">
                              <v-lazy
                              v-model="isActive"
                              :options="{
                              threshold: 1
                              }"
                              transition="fade-transition">
                                  <v-item v-slot:default="{ active, toggle }">
                                      <v-img
                                      :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
                                      height="100"
                                      class="text-right pa-2"
                                      @click="toggle">
                                          <v-btn
                                          icon
                                          dark>
                                              <v-icon>
                                              {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                                              </v-icon>
                                          </v-btn>
                                      </v-img>
                                  </v-item>
                              </v-lazy>
                          </v-col>
                  </v-row>
          </v-item-group>
          </v-container>
    </v-card>
  </v-row>
</v-container>
</template>

<script>
export default {
    name: "ModulesCatalogue",
    data () {
        return {
          isActive: false,
          items: [
              {
                src: 'backgrounds/bg.jpg',
              },
              {
                src: 'backgrounds/md.jpg',
              },
              {
                src: 'backgrounds/bg-2.jpg',
              },
              {
                src: 'backgrounds/md2.jpg',
              },
              {
                src: 'backgrounds/bg.jpg',
              },
              {
                src: 'backgrounds/md.jpg',
              },
              {
                src: 'backgrounds/bg-2.jpg',
              },
              {
                src: 'backgrounds/md2.jpg',
              },
              {
                src: 'backgrounds/bg.jpg',
              },
              {
                src: 'backgrounds/md.jpg',
              },
              {
                src: 'backgrounds/bg-2.jpg',
              },
              {
                src: 'backgrounds/md2.jpg',
              },
            ],
      selected: [],
        }
    },
    computed: {},
    methods: {}

}
</script>

<style lang="scss" scoped>

    body .container {
        margin: 0;
        padding: 30px 6px 30px 6px;
        max-width: 100%;
    }
</style>