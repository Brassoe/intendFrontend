<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <alert-error @dismissed="onDismissed"/>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 >
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignIn">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn
                    type="submit">
                    Log Ind
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "signInForm",
  data () {
    return {
      email: "",
      password: ""
    }
  },
  created() {
    this.$store.dispatch('clearError')
  },
  computed: {
      user () {
          return this.$store.getters.user
      }
  },
  watch: {
      user (value) {
          if(value !== null && value !== undefined) {
              this.$router.push('/dashboard')
          }
      }
  },
  methods: {
    onSignIn() {
      this.$store.dispatch("signIn", {email: this.email, password: this.password})
    },
    onDismissed() {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

