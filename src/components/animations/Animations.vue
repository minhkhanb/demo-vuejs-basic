<template>
  <div>
    <v-btn @click="updateStatus(!isOpen)">Show Duck</v-btn>

    <div>
      <transition name="duck" :duration="4000">
        <img v-show="isOpen" src="@/assets/duck.png" class="app-logo" width="400" height="350">
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'animations',
  methods: {
    updateStatus(newStatus) {
      this.isOpen = Boolean(newStatus);
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style scoped lang="stylus">
  img
    margin-top: 2rem
  .duck
    &-enter-active
      transition: all 5s ease

    &-leave-active
      transition: all .8s

    &-enter
      transform: translateX(100%)
    &-enter-to
      transform: translateX(0%)

    &-leave-to
      transform: translateY(130%)

    &-leave
      transform: translateY(130%)
</style>
