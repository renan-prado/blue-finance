<template>
  <div class="finance-view">
    <div class="main">
      <div class="container">

          <Loading v-show="loading" />
          
          <div class="finance-view__group">
            <!-- <h1> Cotações </h1> -->

            <div class="finance-view__list">

              <Financeitem
                v-for="item in nowCurrencies"
                :key="item.name"
                :variation="item.variation"
                :value="item.buy"
                :title="item.name" />

              <FinanceItemStock
                v-for="item in nowStocks"
                :key="item.name"
                :variation="item.variation"
                :value="item.name"
                :title="item.location" />

              <FinanceItemStock
                v-for="item in nowOthers"
                :key="item.name"
                :variation="item.variation"
                :value="item.name"
                :title="item.location" />
              
            </div> <!-- ./ finance-view__list -->

          </div> <!-- ./ finance-view__group -->

      </div> <!-- ./ container -->
    </div> <!-- ./ main -->

  </div>
</template>

<script>

import Financeitem from "./FinanceItem";
import FinanceItemStock from "./FinanceItemStock";
import Loading from "./Loading";
import Utils from "../Utils";

export default {
  name: 'FinanceView',

  data(){
    return {
      currencies: [],
      nowCurrencies: [],
      nowStocks: [],
      nowOthers: [],
      currenciesEditing: false,
      stocksEditing: false,
      othersEditing: false,
    }
  },

  created(){
    this.init();
  },

  methods: {

    init: function(){

      this.currenciesEditing = true;
      this.stocksEditing = true;
      this.othersEditing = true;

      // get currencies | 7 days ago
      Utils.getCurrencies(7, currencies => {

        // currencies object to array
        this.objectToArray(currencies, currenciesList => {

          // reverse currency
          this.reverseCurrency(currenciesList, currenciesReverse => this.currencies = currenciesReverse);

        });

      });

    },

    objectToArray: function(object, callback){

      const objectkeys = Object.keys(object).reverse();
      let objectList = [];

      objectkeys.forEach(value => objectList.push(object[value]));

      callback(objectList);
    },

    reverseCurrency: function(currencies, callback){
      const currenciesReverse = currencies.map(currency => currency.reverse());
      callback(currenciesReverse);
    }

  },

  watch: {

    currencies: function(currencies){

      this.currenciesEditing = true;
      this.stocksEditing = true;
      this.othersEditing = true;

      this.objectToArray(currencies[0][0].currencies, nowCurrencies => {
        this.nowCurrencies = nowCurrencies.slice(1);
        this.currenciesEditing = false;
      });

      this.objectToArray(currencies[0][0].stocks, nowStocks => {
        this.nowStocks = nowStocks;
        this.stocksEditing = false;
      });

      this.objectToArray(currencies[0][0].others, nowOthers => {
        this.nowOthers = nowOthers;
        this.othersEditing = false;
      });

    },

  },

  computed: {
    
    loading: function(){
      return this.currenciesEditing || this.stocksEditing || this.othersEditing;
    }

  },

  components: {
    Financeitem,
    FinanceItemStock,
    Loading,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/components/financeView.scss";
</style>
