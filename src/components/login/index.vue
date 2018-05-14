<template>
  <div class="content">
    <div class="container fluid fill-height">
      <div class="layout align-center justify-center">
        <div class="flex xs12 sm8 md4">
          <div class="card elevation-12">
            <div class="toolbar primary" dark>
              <h1>Login form</h1>
            </div>
            <div>
              <form class="form-login">
                <div class="form-group">
                  <label class="v-label pdr">Login:</label>
                  <!--<input type="text" v-model="login.email" class="v-input" autofocus/>-->
                  <input type="text" v-model="login.email" class="v-input" v-focus/>
                </div>
                <div class="form-group">
                  <label class="v-label">Password:</label>
                  <input type="password" v-model="login.password" class="v-input"/>
                </div>
              </form>
            </div>
            <div class="loading-overlay" v-if="loading">
              <v-progress-circular indeterminate
                                   color="primary"
                                   md-mode="indeterminate"
                                   :md-stroke="2"></v-progress-circular>
            </div>
            <div class="">
              <button class="btn btn-login primary form-group" @click="auth">
                <span class="">Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  $white: #ffffff;
  h1 {
    color: $white;
  }
  .content {
    .form-login {
      text-align: left;
    }
    .form-group {
      margin: 2rem;
    }
    .v-label {
      font-weight: 700;
    }
    .v-input {
      border: 1px solid blue;
      width: 75%;
    }
    .btn {
      border-radius: 5%;
      &.btn-login {
        color: $white;
      }
    }
    .pdr {
      padding-right: 2rem;
    }
  }

</style>
