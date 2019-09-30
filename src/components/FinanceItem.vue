<template>
    <div class="finance-view__item">
      <div :class="{'finance-view__item-variation': true, '--red': variation < 0 }"> <label>{{ variation_set }} </label> </div>
      <div class="finance-view__item-value"> <label> {{ value_set }} </label> </div>
      <div class="finance-view__item-text"> <h2> {{ title_set }} </h2> </div>
    </div> <!-- ./ finance-view__item -->
</template>

<script>

export default {
  name: 'Financeitem',

  data(){
    return {
    }
  },

  computed: {

    variation_set: function(){
      return this.variation ? this.variation + '%' : '';
    },

    value_set: function(){
      return this.value ? 'R$ ' + this.value : '';
    },

    title_set: function(){
      return this.title ? this.title : '';
    },

  },

  props: ['variation', 'value', 'title']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/components/financeView.scss";
</style>
