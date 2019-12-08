<template>
  <nav>
    <v-bottom-navigation
    dark
    app>
      <v-list class="mt-1">
        <v-btn
          v-for="item in toolbarItems" :key="item.title"
          class="bottom-navigation-btn"
          router
          :to="item.link">
            <v-icon color="#10ac84">{{item.icon}}</v-icon>
        </v-btn>
        <v-btn 
          v-if="userIsAuthenticated && installedModules.length != 0"
          class="bottom-navigation-btn" 
          @click="sheet = !sheet">
            <v-icon color="#10ac84">mdi-view-module</v-icon>
        </v-btn>
      </v-list>
    </v-bottom-navigation>
    <v-bottom-sheet 
    v-model="sheet" 
    v-if="userIsAuthenticated"
    :scrollable="false"
    disabled>
          <v-sheet 
          class="text-center" 
          style="background-color:rgb(33,33,33,0);"
          dark>
            <v-slide-group
              class="moduleSlider"
              multiple>
                <v-slide-item
                v-for="(item, i) in installedModules"
                :key="i">
                  <v-card
                  class="mx-1 my-3"
                  height="100"
                  width="100"
                  :img="'http://localhost:8080/modules/'+item.name+'/icon.svg'"
                  router
                  :to="item.name"
                  @click="sheet = false">
                  </v-card>
                </v-slide-item>
              </v-slide-group>
          </v-sheet>
    </v-bottom-sheet>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
      activeBtn: 1,
      sheet: false,
    }
  },
  computed: {
    toolbarItems () {
      let items = [
        {icon: 'mdi-home', title: 'Forside', link: '/'},
        {icon: 'mdi-login', title: 'Log Ind', link: '/login'},
        {icon: 'mdi-account-plus', title: 'Opret bruger', link: '/sign-up'},
      ]
      if(this.userIsAuthenticated) {
        items = [
          {icon: 'mdi-home', title: 'Dashboard', link: '/dashboard'},
          {icon: 'mdi-account-multiple', title: 'Venner', link: '/share'},
          {icon: 'mdi-store', title: 'Moduler', link: '/modules'},
        ]
      }
      return items
    },
    navigationDrawerItems() {
        let items = [
          {icon: 'mdi-account', title: 'Konto', link: '/account'},
          {icon: 'mdi-settings', title: 'Indstillinger', link: '/settings'}
        ]
      return items
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    installedModules() {
      return this.$store.getters.installedModules
    },
    
  },
  watch: {
      userIsAuthenticated (value) {
          if(!value) {
              this.$router.push('/')
          }
      }
  },
  methods: {
    onLogOut() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

