<template>
  <div>
    <div v-if="components.length > 0">
      <h2 class="text-xs-center">Components</h2>
      <p v-for="(component, i) in components" :key="i">
        <strong>#{{ i+1 }}</strong>
        <span>{{ component.name }}</span>
        <router-link :to="'/components-list/' + component.name">See demo</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'components-list',

  data() {
    return {
      title: 'Component Page',
      childrents: [
        {
          type: 'c',
          name: 'users',
        },
      ],
    };
  },

  computed: {
    components() {
      return this.childrents.filter(c => c.type === 'c');
    },
  },
};
</script>

<style scoped lang="scss">
</style>

