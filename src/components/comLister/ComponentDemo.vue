<template>
  <div>
    <div class="pa-5">
      <h1>{{componentName}}</h1>
      <users v-if="componentName === 'Users' " />
      <test v-if="componentName === 'Test' " />
    </div>
    <div>
      <router-link to="/components-list">Go back</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'component-demo',
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
