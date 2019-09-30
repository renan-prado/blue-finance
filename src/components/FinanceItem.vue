<template>
    <div class="finance-view__item" @click="openModal">
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

  methods: {
    openModal: function(){
      this.$emit('openModal', {
        key: this.itemKey,
        type: this.type,
        title: this.title
      });
    }
  },

  computed: {

    variation_set: function(){
      return this.variation ? this.variation.toFixed(3).replace('.', ',') + '%' : '0,00%' ;
    },

    value_set: function(){
      return this.value ? 'R$ ' + this.value.toFixed(2).replace('.', ',') : 'R$ 0';
    },

    title_set: function(){
      return this.title ? this.title : '';
    },

  },

  props: ['variation', 'value', 'title', 'itemKey', 'type']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/components/financeView.scss";
</style>
