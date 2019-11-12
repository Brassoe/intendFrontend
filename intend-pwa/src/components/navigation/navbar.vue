<template>
  <nav>
    <v-bottom-navigation
    app
    dark>
    <!-- Bottom Navigation if logged in -->
    <v-list v-for="item in toolbarItemsLoggedIn" :key="item.title">
      <v-btn
      class="bottom-navigation-btn"
      router
      :to="item.link">
        <span>{{item.title}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
    </v-list>
    <v-btn class="bottom-navigation-btn" @click="drawer = !drawer">
      <span>Menu</span>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <!-- Bottom navigation if NOT logged in -->
    <v-list v-for="item in toolbarItemsNotLoggedIn" :key="item.title">
      <v-btn
      class="bottom-navigation-btn"
      router
      :to="item.link">
        <span>{{item.title}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
    </v-list>
  </v-bottom-navigation>

  <v-navigation-drawer
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
      toolbarItemsLoggedIn: [
        {icon: 'mdi-view-dashboard', title: 'Moduler', link: ''},
        {icon: 'mdi-logout', title: 'Log Ud', link: ''},
      ],
      toolbarItemsNotLoggedIn: [
        {icon: 'mdi-login', title: 'Log Ind', link: ''},
        {icon: 'mdi-account-plus', title: 'Opret bruger', link: '/sign-up'},
      ]
    }
  },
}
</script>

<style lang="scss">
  .bottom-navigation-btn {
    margin-top: 7px;
  }
</style>
