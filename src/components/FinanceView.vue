<script>

import Financeitem from "./FinanceItem";
import FinanceItemStock from "./FinanceItemStock";
import Loading from "./Loading";
import Modal from "./Modal";
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
      modal: false,
      modalType: {}
    }
  },

  created(){
    this.init();
  },

  methods: {

    // init component
    init: function(){

      // data editing
      this.currenciesEditing = true;
      this.stocksEditing = true;
      this.othersEditing = true;

      // get currencies | 3 days ago
      Utils.getCurrencies(3, currencies => {

        // currencies object to array
        this.objectToArray(currencies, currenciesList => {

          // reverse currency array
          this.reverseCurrency(currenciesList, currenciesReverse => this.currencies = currenciesReverse);

        });

      });

    },

    // convert object to array
    objectToArray: function(object, callback){

      const objectkeys = Object.keys(object).reverse();
      let objectList = [];
      let obj;

      objectkeys.forEach(value => {
        
        obj = object[value];

        if(typeof obj == 'object') obj.key = value;

        objectList.push(obj)
      });

      callback(objectList);
    },

    // reverse child array
    reverseCurrency: function(currencies, callback){
      const currenciesReverse = currencies.map(currency => currency.reverse());
      callback(currenciesReverse);
    },

    // open modal
    openModal: function(data){
      this.modalType = data;
      this.modal = true;
    }

  },

  watch: {

    currencies: function(currencies){

      // data editing
      this.currenciesEditing = true;
      this.stocksEditing = true;
      this.othersEditing = true;

      // currencies object to array 
      this.objectToArray(currencies[0][0].currencies, nowCurrencies => {
        this.nowCurrencies = nowCurrencies.slice(1);
        this.currenciesEditing = false;
      });

      // stocks object to array 
      this.objectToArray(currencies[0][0].stocks, nowStocks => {
        this.nowStocks = nowStocks;
        this.stocksEditing = false;
      });

      // others object to array 
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
    Modal,
  }
};
</script>

<template>
  <div class="finance-view">
    <div class="main">
      <div class="container">

          <Loading v-show="loading" />
          <Modal @close="modal = false" :currencies="currencies" :modalType="modalType" v-if="modal" />
          
          <div class="finance-view__group">
            <!-- <h1> Cotações </h1> -->

            <div class="finance-view__list">

              <!-- Currency Items -->
              <Financeitem
                v-for="item in nowCurrencies"
                :key="item.name"
                @openModal="openModal"
                :itemKey="item.key"
                :type="'currencies'"
                :variation="item.variation"
                :value="item.buy"
                :title="item.name" />

              <!-- Stock Items -->
              <FinanceItemStock
                v-for="item in nowStocks"
                :key="item.name"
                @openModal="openModal"
                :itemKey="item.key"
                :type="'stocks'"
                :variation="item.variation"
                :value="item.name"
                :title="item.location" />

              <!-- Other Items -->
              <FinanceItemStock
                v-for="item in nowOthers"
                :key="item.name"
                @openModal="openModal"
                :itemKey="item.key"
                :type="'others'"
                :variation="item.variation"
                :value="item.name"
                :title="item.location" />
              
            </div> <!-- ./ finance-view__list -->

          </div> <!-- ./ finance-view__group -->

      </div> <!-- ./ container -->
    </div> <!-- ./ main -->

  </div>
</template>

<style scoped lang="scss">
  @import "../styles/components/financeView.scss";
</style>
