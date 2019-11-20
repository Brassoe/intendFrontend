<template>
  <nav>
    <v-menu
    dark
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="300"
      offset-x>
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon
        large
        light
        v-on="on">
        </v-app-bar-nav-icon>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon large v-if="!userInfo || !userInfo.profileImage">mdi-account-circle</v-icon>
              <v-avatar  size="32" v-else>
                <v-img :src="userInfo.profileImage"></v-img>
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{userInfo.name}}</v-list-item-title>
              <v-list-item-subtitle>{{userInfo.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

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
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-icon text large color="#10ac84" @click="menu = false">mdi-close-circle</v-icon>
        </v-card-actions>
      </v-card>
    </v-menu>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      menu: false,
      drawer: false,
      activeBtn: 1,
    }
  },
  computed: {
    headerItems () {
      let items = [
        {icon: 'mdi-login', title: 'Log Ind', link: '/login'},
        {icon: 'mdi-account-plus', title: 'Opret bruger', link: '/sign-up'},
      ]
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
    userInfo() {
      return this.$store.getters.user
    }
  },
  methods: {
    onLogOut() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

