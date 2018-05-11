<template>
  <div class="section-user-add">
    <h3>Add New User</h3>
    <form class="md-layout" >
      <div class="form-group">
        <label class="v-label pdr">Name:</label>
        <input class="v-input" v-model="form.name" autofocus/>
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
  props: ['userAdded'],

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
  $green: #82B1FF;
  .section-user-add {
    border: 2px solid $green;
  }
  h1 {
    color: $white;
  }
  h3 {
    margin-top: 1rem;
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
