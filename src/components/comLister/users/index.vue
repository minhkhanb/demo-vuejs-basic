<template>
  <div>
    <user-add :user-added="userAdded1"></user-add>
    <user-list :remove-user="removeUser" :users="users" ></user-list>
  </div>
</template>
<script>


export default [
  {
    name: 'users',
    props: {
      removeUser: Function,
    },
    data() {
      return {
        users: [],
      };
    },

    methods: {
      userAdded1(newMember) {
        this.users.push(newMember);
      },

      removeUser(index) {
        this.users.splice(index, 1);
      },
    },
  },

];
</script>
<style scoped lang="scss">
</style>
