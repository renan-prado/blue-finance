<script>
  export default {
    name: 'Loading',
  };
</script>

<template>
  <div class="loading">
    <img src="../../public/loading.gif" />
  </div>
</template>

<style scoped lang="scss">
  .loading {
    width: 100%;
    height: 100vh;
    background-color: #ffffffaa;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
    }
  }
</style>
