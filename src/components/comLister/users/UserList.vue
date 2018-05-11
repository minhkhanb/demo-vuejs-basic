<template>
  <div class="section-user-list">
    <h3>List Users</h3>
    <div class="table-user">
      <div>
        <table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
          <tr v-for="(item, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>
              <p>
                <a style="text-decoration: underline" @click="removeElement(index)">remove</a>
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['users', 'removeUser'],
  data: () => ({
    search: null,
    searched: [],
  }),
  computed: {
  },
  methods: {
    removeElement(index) {
      this.removeUser(index);
    },
  },
  created() {
    this.searched = this.users;
  },
};
</script>
<style scoped lang="scss">
</style>
