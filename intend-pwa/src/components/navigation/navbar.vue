<template>
  <nav>
    <v-bottom-navigation
    light
    app>
    <!-- Bottom Navigation if logged in -->
    <v-list>
      <v-btn
        v-for="item in toolbarItems" :key="item.title"
        class="bottom-navigation-btn"
        router
        :to="item.link">
          <v-icon>{{item.icon}}</v-icon>
      </v-btn>
      <v-btn 
        v-if="userIsAuthenticated"
        class="bottom-navigation-btn" 
        @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-list>
  </v-bottom-navigation>

  <v-navigation-drawer
  v-if="userIsAuthenticated"
  app
  v-model="drawer"
  light
  temporary
  overlay-color="#000">
    <template v-slot:prepend>
      <v-list-item 
      two-line
      router
      to="/profile">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/lego/1.jpg">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Philip Grand</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-divider></v-divider>
      <!-- Populate navigation drawer with menu items -->
    <v-list dense>
      <!-- Items drawn from array -->
      <v-list-item
      v-for="item in navigationDrawerItems"
      :key="item.title"
      router
      :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <!-- Static items for logout -->
      <v-list-item
      @click="onLogOut">
        <v-list-item-icon>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Log Ud</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>


  </nav>

</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
      activeBtn: 1,
    }
  },
  computed: {
    toolbarItems () {
      let items = [
        {icon: 'mdi-login', title: 'Log Ind', link: '/login'},
        {icon: 'mdi-account-plus', title: 'Opret bruger', link: '/sign-up'},
      ]
      if(this.userIsAuthenticated) {
        items = [
          {icon: 'mdi-home', title: 'Dashboard', link: '/dashboard'},
          {icon: 'mdi-account-multiple', title: 'Venner', link: '/share'},
          {icon: 'mdi-view-module', title: 'Moduler', link: '/modules'},
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
    }
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

<style lang="scss">
  .bottom-navigation-btn {
    margin-top: 7px;
  }
</style>
