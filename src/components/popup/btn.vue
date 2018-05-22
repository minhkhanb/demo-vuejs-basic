<template>
  <v-btn v-if="text === 'Increment'" @click="increment" :disabled="Boolean(status)">{{text}}</v-btn>
  <v-btn v-else @click="decrement" :disabled="Boolean(status)">{{text}}</v-btn>
</template>
<script>
export default {
  name: 'btn',
  props: {
    text: String,
  },
  computed: {
  },
  methods: {
    increment() {
      store.commit('increment');
    },
    decrement() {
      store.commit('decrement');
    },
  },
  data() {
    return {
    };
  },
};
</script>
<style></style>
