<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <slot name="addNewUser">
            <h1> Add New User</h1>
            <div>Sample popup</div>
            <v-btn @click="setOpen">Close</v-btn>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'add-new-user',
  props: ['closePopup'],
  methods: {
    setOpen() {
      this.closePopup();
    },
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped lang="scss">
  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
    z-index: 9998;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  .modal-enter, .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
