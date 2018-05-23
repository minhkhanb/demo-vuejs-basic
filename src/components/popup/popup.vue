<template>
  <div>
    <div>
      <h1>Sample store</h1>
      <strong> Result: {{count}}</strong>

      <div>
        <btn text = 'Increment' />
        <btn text = 'Decrement' />
      </div>
      <v-btn @click="changeStatus(!checkStatus)" >Loading</v-btn>
      <loading v-if="checkStatus" />
      <add-new-user />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import Loading from '@/components/shared/loading';
import AddNewUser from './addNewUser';
import Btn from './btn';

export default {
  name: 'popup',
  components: {
    AddNewUser,
    Loading,
    Btn,
  },
  computed: {
    ...mapGetters({
      count: 'count',
      checkStatus: 'status',
    }),
  },
  methods: {
    ...mapMutations({
      changeStatus: 'changeStatus',
    }),
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>
<style scoped lang="scss">
  .my-body-noscroll-class {
    overflow: hidden;
  }
</style>
