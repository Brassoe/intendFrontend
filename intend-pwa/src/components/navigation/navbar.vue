<template>
  <nav>
    <v-bottom-navigation
    app
    color="">
    <!-- Bottom Navigation if logged in -->
    <v-list >
      <v-btn
      v-for="item in toolbarItems" :key="item.title"
      class="bottom-navigation-btn"
      router
      :to="item.link">
        <span>{{item.title}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
      <v-btn class="bottom-navigation-btn" @click="drawer = !drawer">
        <span>Menu</span>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-list>
  </v-bottom-navigation>

  <v-navigation-drawer
  v-if="userIsAuthenticated"
    absolute
    temporary
    v-model="drawer"
    app
    class="indigo"
    overlay-color="#000">
    <template v-slot:prepend>
        <v-list-item two-line>
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
      <v-list dense>
        <v-list-item
          v-for="item in navigationDrawerItems"
          :key="item.title"
          @click=""
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      activeBtn: 1
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
          {icon: 'mdi-view-dashboard', title: 'Moduler', link: '/modules'},
        ]
      }
      return items
    },
    navigationDrawerItems() {
        let items = [
          {icon: 'mdi-account', title: 'Konto', link: ''},
          {icon: 'mdi-logout', title: 'Log Ud', link: ''},
        ]
      return items
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>

<style lang="scss">
  .bottom-navigation-btn {
    margin-top: 7px;
  }
</style>
