<template>
  <div class="section-user-add">
    <h3>Add New User</h3>
    <form class="md-layout" >
      <div class="form-group">
        <label class="v-label pdr" for="first-name">Name:</label>
        <input class="v-input" name="first-name" id="first-name"
               v-model="form.name"/>
      </div>
      <div>
        <button type="submit" class="btn primary" @click="submit">Add User</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'user-add',
  props: {
    userAdded: Function,
  },

  methods: {
    submit() {
      const newMember = {
        name: String,
      };
      newMember.name = this.form.name;

      this.userAdded(newMember);
    },
  },

  data() {
    return {
      lastUser: null,
      form: {
        name: null,
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
    border: 1px solid #ff000a;
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
