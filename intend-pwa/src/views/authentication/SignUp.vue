<template>
  <v-container>
      <signUpForm/>
  </v-container>
</template>

<script>
import signUpForm from '@/components/authentication/signUpForm.vue'

export default {
  name: 'SignUp',
  components: {
    signUpForm
  }
}
</script>
