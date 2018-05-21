<template>
  <div>
    <div>
      <img src="@/assets/loading.png" class="app-logo">
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading',
};
</script>
<style scoped lang="scss">
  h3 {
    margin-bottom: 4rem;
  }
  img {
    width: 3rem;
    height: 3rem;
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }
</style>
