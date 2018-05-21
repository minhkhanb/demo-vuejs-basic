<template>
  <div>
    <div class="pa-5">
      <h1>{{componentName}}</h1>
      <users v-if="componentName === 'Users' " />
      <test v-if="componentName === 'Test' " />
      <loading v-if="componentName === 'Loading' " />
    </div>
    <div>
      <router-link to="/components-list">Go back</router-link>
    </div>
  </div>
</template>

<script>
import Loading from '../shared/loading';

export default {
  name: 'component-demo',
  components: {
    Loading,
  },
  data() {
    return {
      componentName: '',
      inputText: '',
      showLoading: true,
    };
  },
  mounted() {
    this.componentName = this.$route.params.comName;
    this.initComponent();
  },
  methods: {
    initComponent() {
      setTimeout(() => {
        this.showLoading = false;
      }, 3000);
    },
  },
  computed: {
  },
};
</script>

<style scoped lang="scss">
  h1 {
    margin-bottom: 1rem;
    border-bottom: 1px solid #82B1FF;
    border-bottom-style: dotted;
  }
</style>
