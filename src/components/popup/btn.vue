<template>
  <v-btn v-if="text === 'Increment'" @click="increment" :disabled="checkStatus">
    {{text}}
  </v-btn>
  <v-btn v-else @click="decrement" :disabled="checkStatus">{{text}}</v-btn>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'btn',
  props: {
    text: String,
  },
  computed: {
    ...mapGetters({
      count: 'count',
      checkStatus: 'status',
    }),
  },
  methods: {
    ...mapMutations({
      increment: 'increment',
      decrement: 'decrement',
    }),
  },
};
</script>
<style></style>
