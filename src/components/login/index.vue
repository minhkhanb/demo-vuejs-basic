<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person"
                              v-model="login.email"
                              name="login"
                              label="Login"
                              type="text"
                              autofocus></v-text-field>
                <v-text-field id="password"
                              v-model="login.password"
                              prepend-icon="lock"
                              name="password"
                              label="Password"
                              type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <div class="loading-overlay" v-if="loading">
              <v-progress-circular indeterminate
                                   color="primary"
                                   md-mode="indeterminate"
                                   :md-stroke="2"></v-progress-circular>
            </div>
            <v-card-actions>
              <v-spacer>
              </v-spacer>
              <v-btn color="primary" @click="auth">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
export default {
  name: 'login',
  methods: {
    auth() {
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
  },
  data() {
    return {
      loading: false,
      login: {
        email: '',
        password: '',
      },
    };
  },
};
</script>
<style scoped lang="scss">

</style>
