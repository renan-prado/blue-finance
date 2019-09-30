<template>
  <div class="finance-view">
    <div class="main">
      <div class="container">
          
          <div class="finance-view__group">
            <!-- <h1> Cotações </h1> -->

            <div class="finance-view__list">

              <Financeitem variation="-0.344" value="2.90" title="Dólar" />
              <Financeitem variation="0.273" value="2.94" title="Euro" />
              <Financeitem variation="-0.876" value="1.28" title="Peso Argentino" />
              <Financeitem variation="0.099" value="2.57" title="Libra Estelina" />
              <Financeitem variation="0.983" value="3.77" title="Bitcoin" />
              <Financeitem variation="0.204" value="1.93" title="Bovespa" />
              <Financeitem variation="-0.099" value="3.24" title="Não sei" />
              
            </div> <!-- ./ finance-view__list -->

          </div> <!-- ./ finance-view__group -->

      </div> <!-- ./ container -->
    </div> <!-- ./ main -->

  </div>
</template>

<script>

import Financeitem from "./FinanceItem";

export default {
  name: 'FinanceView',

  data(){
    return {
    }
  },

  components: {
    Financeitem,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/components/financeView.scss";
</style>
