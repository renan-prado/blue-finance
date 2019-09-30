<template>
  <div class="modal">
    <div class="main">
      <div class="container">
        
        <div class="modal__box">

          <div class="modal__header">
            <button @click="close">Close</button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',

  data(){
    return {
    }
  },

  methods: {
    close: function(){
      this.$emit('close');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/components/modal.scss";
</style>
