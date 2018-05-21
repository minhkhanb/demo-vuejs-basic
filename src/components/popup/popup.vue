<template>
  <div>
    <v-btn @click="openPopup">Dialog</v-btn>
    <v-btn></v-btn>
    <add-new-user v-if="isOpen" :closePopup="closePopup">
    </add-new-user>
    <loading v-if="isLoading"></loading>
  </div>
</template>
<script>
import Loading from '@/components/shared/loading';
import Login from '@/components/login';
import AddNewUser from './addNewUser';

export default {
  name: 'popup',
  components: {
    AddNewUser,
    Loading,
    Login,
  },
  methods: {
    openPopup() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.isOpen = true;
      }, 3000);
    },
    closePopup() {
      this.isOpen = false;
    },
  },
  data() {
    return {
      isLoading: false,
      isOpen: false,
    };
  },
};
</script>
<style scoped lang="scss">
  .my-body-noscroll-class {
    overflow: hidden;
  }
</style>
