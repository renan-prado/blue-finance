<template>
    <div class="finance-view__item">
      <div :class="{'finance-view__item-variation': true, '--red': variation < 0 }"> <label>{{ variation_set }} </label> </div>
      <div class="finance-view__item-value"> <label style="font-size: 22px"> {{ value_set }} </label> </div>
      <div class="finance-view__item-text"> <h2 style="font-size: 15px"> {{ title_set }} </h2> </div>
    </div> <!-- ./ finance-view__item -->
</template>

<script>

export default {
  name: 'FinanceitemStock',

  data(){
    return {
    }
  },

  computed: {

    variation_set: function(){
      return this.variation ? this.variation : '';
    },

    value_set: function(){
      return this.value ? this.value : '';
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
