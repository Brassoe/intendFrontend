<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12>
      <alert-error @dismissed="onDismissed"/>
    </v-flex>
    <v-flex xs12 md4>
      <v-stepper v-model="e1" height="100%">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1" color="#10ac84">Oplysninger om dig</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2" color="#10ac84">Adresse</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3" color="#10ac84">Login oplysninger</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items> 
            <v-stepper-content step="1">
                
              <v-flex xs12>
              <v-form>
                <v-text-field
                  name="name"
                  placeholder="Navn"
                  id="name"
                  v-model="name"
                  type="text"
                  required>
                </v-text-field>
              </v-form>
              </v-flex>
              <v-btn
              :disabled="!name"
              text
              small
                color="#10ac84"
                @click="e1 = 2">
                Fortsæt
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-flex xs12>
              <v-text-field
                name="address"
                placeholder="Adresse"
                id="address"
                v-model="address"
                type="text"
                required>
              </v-text-field>
              </v-flex>
              <v-btn
              text
              small
                color="error"
                @click="e1 = 1">
                tilbage
              </v-btn>
              <v-btn
              :disabled="!address"
              text
              small
              color="#10ac84"
              @click="e1 = 3">
              Fortsæt
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <form @submit.prevent="onSignUp">
              <v-flex xs12>
                  <v-text-field
                    name="email"
                    placeholder="Email"
                    id="email"
                    v-model="email"
                    type="email"
                    required>
                  </v-text-field>
                </v-flex>
              <v-flex xs12>
                  <v-text-field
                    name="password"
                    placeholder="Password"
                    id="password"
                    v-model="password"
                    type="password"
                    required>
                  </v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                      placeholder="Bekræft Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[comparePasswords]">
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 mb-5>
                    <v-btn
                    v-if="comparePasswords == true"
                    type="submit">
                    Opret bruger
                    </v-btn>
                  </v-flex>
              </form>

              <v-btn
              text
              small
                color="error"
                @click="e1 = 2">
                tilbage
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
      </v-stepper>
    </v-flex>
  </v-layout>
</v-container>
    
</template>

<script>
export default {
  name: "signUpForm",
  data () {
    return {
      e1: 0,
      name: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  },
  created() {
    this.$store.dispatch('clearError')
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
      const newUser = {
        name: this.name,
        address: this.address,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch("signUp", newUser)
    },
    onDismissed() {
      this.$store.dispatch('clearError')
    }
  }



}
</script>

<style lang="css" scoped>
</style>
