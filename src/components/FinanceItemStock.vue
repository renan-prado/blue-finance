<script>
export default {
  name: 'FinanceitemStock',

  methods: {

    // open modal 
    openModal: function(){

      // sending context
      this.$emit('openModal', {
        key: this.itemKey,
        type: this.type,
        title: this.value
      });
    }

  },

  computed: {

    variation_set: function(){
      return this.variation ? this.variation + '%' : '0,00%';
    },

    value_set: function(){
      return this.value ? this.value : '';
    },

    title_set: function(){
      return this.title ? this.title : '';
    },

  },

  props: ['variation', 'value', 'title', 'itemKey', 'type']
};
</script>

<template>
    <div class="finance-view__item" @click="openModal">
      <div :class="{'finance-view__item-variation': true, '--red': variation < 0 }"> <label>{{ variation_set }} </label> </div>
      <div class="finance-view__item-value"> <label style="font-size: 22px"> {{ value_set }} </label> </div>
      <div class="finance-view__item-text"> <h2 style="font-size: 15px"> {{ title_set }} </h2> </div>
    </div> <!-- ./ finance-view__item -->
</template>

<style scoped lang="scss">
  @import "../styles/components/financeView.scss";
</style>
