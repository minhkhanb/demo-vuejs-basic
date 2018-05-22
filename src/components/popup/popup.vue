<template>
  <div>
    <div>
      <h1>Sample store</h1>
      <strong> Result: {{count}}</strong>

      <div>
        <btn text = 'Increment' />
        <btn text = 'Decrement' />
      </div>
      <add-new-user />
    </div>
  </div>
</template>
<script>
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
  methods: {
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
