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
                <a class="link-text" @click="removeElement(index)">remove</a>
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
  name: 'user-list',
  props: ['users', 'removeUser'],
  methods: {
    removeElement(index) {
      this.removeUser(index);
    },
  },
};
</script>
<style scoped lang="scss">
  .section-user-list {
    margin-top: 4rem;
    table {
      margin: 2% 32%;
      width: 400px;

      border: 1px solid black;
      tr {
        border-bottom: 1px solid black;
      }
      th {
        border: 1px solid black;
      }
      td {
        border: 1px solid black;
        padding: 0.5rem;
      }
    }
    .link-text {
      text-decoration: underline;
    }
  }
</style>
