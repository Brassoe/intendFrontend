<template>
  <v-container grid-list-md  fill-height>
    <v-layout row>
      <span class="heading">Tilmeld bruger</span>
      <v-flex xs12 sm6 offset-sm3 >
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignUp">
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
                    <v-text-field
                      name="confirmPassword"
                      label="Bekræft Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[comparePasswords]">
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn
                    v-if="comparePasswords == true"
                    type="submit">
                    Opret bruger
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
  name: "signUpForm",
  data () {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    }
  },
  computed: {
    comparePasswords () {
      if(this.password == "" || this.confirmPassword == ""){
        return ""
      } else {
        if(this.password !== this.confirmPassword) {
          return 'Password er ikke ens'
        } else {
          return true
        }
      }

    },
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
    onSignUp() {
      this.$store.dispatch("signUp", {email: this.email, password: this.password})
    }
  }



}
</script>

<style lang="css" scoped>
</style>
