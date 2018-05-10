<template>
  <div class="section-user-add">
    <h3>Add New User</h3>
    <form class="md-layout" >
      <div class="form-group">
        <label class="v-label pdr" for="first-name">Name:</label>
        <input class="v-input" name="first-name" id="first-name"
               v-model="form.firstName"/>
      </div>
      <div class="form-group">
        <label class="v-label" >Birth Year</label>
        <select class="v-input" name="datePicker" id="datePicker"
                v-model="form.datePicker">
          <option v-for="(value, index) in yearsBD" :value="value" :key = index>
            {{value}}
          </option>
        </select>
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
  computed: {
    yearsBD() {
      const arr = [];
      const d = new Date();
      const yearPresent = d.getFullYear();
      for (let i = 1950; i < yearPresent; i++) {
        arr.push(i);
      }
      return arr;
    },
  },

  methods: {
    submit() {
      const newMember = {
        firstName: String,
        datePicker: String,
        age: String,
      };
      const d = new Date();
      const yearPresent = d.getFullYear();
      newMember.firstName = this.form.firstName;
      newMember.datePicker = this.form.datePicker;
      newMember.age = yearPresent - this.form.datePicker;

      this.userAdded(newMember);
    },
  },

  data() {
    return {
      lastUser: null,
      form: {
        firstName: null,
        datePicker: null,
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
