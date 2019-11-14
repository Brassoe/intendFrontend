<template>
  <v-container>
      <signInForm/>
  </v-container>
</template>

<script>
import signInForm from '@/components/authentication/signInForm.vue'

export default {
  name: 'SignIn',
  components: {
    signInForm
  }
}
</script>