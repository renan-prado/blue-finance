<template>
  <div class="loading">
    <img src="../assets/loading.gif" />
  </div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
