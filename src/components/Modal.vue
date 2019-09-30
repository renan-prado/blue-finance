<template>
  <div class="modal">
    <div class="main">
      <div class="container">
        
        <div class="modal__box">

          <div class="modal__header">
            <button @click="close">Close</button>
          </div>

          <div id="my-chart" style="width:100%; height: 500px; margin-top: 20px;"></div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>

import Highcharts from 'highcharts';
import { watch } from 'fs';

export default {
  name: 'Modal',

  data(){
    return {
      allCurrencyHourFiltered: []
    }
  },

  props: ['currencies', 'modalType'],

  mounted(){

    this.allCurrencyHour;

  },

  methods: {
    close: function(){
      this.$emit('close');
    },

    renderChart: function(dataChart){
      Highcharts.chart(document.getElementById('my-chart'), {

        title: {
            text: `Cotação do ${dataChart.name} | Últimos ${dataChart.days} dias`
        },
        chart: {
            type: 'area',
            zoomType: 'x'
        },

        xAxis: {
            type: 'datetime',
            tickInterval: 3600 * 1000,
            min: Date.UTC(dataChart.minDate.year, dataChart.minDate.month, dataChart.minDate.day),
            max: Date.UTC(dataChart.maxDate.year, dataChart.maxDate.month, dataChart.maxDate.day),
        },

        yAxis: {
          title: {
              text: ''
          },
          labels: {
              formatter: function () {
                  return this.value + '%';
              }
          }
        },

        series: [{
          name: dataChart.name,
          data: dataChart.data,
          pointInterval: 3600 * 60 // one day
        }]

      });
    },

    filterFinancesData: function(allCurrencyHour, callback){
      let itemMap;
    
      let allCurrencyHourFiltered = allCurrencyHour.map(item => {

        // if have keys
        try { 
          itemMap = item[this.modalType.type][this.modalType.key];
          itemMap.date = item.date;
          return itemMap; 
        } catch (error) {
          return false
        }
      });
      
      // remove falses
      allCurrencyHourFiltered = allCurrencyHourFiltered.filter(item => item);

      callback(allCurrencyHourFiltered);
    },

    mountChart: function(){
      const allCurrencyHourFiltered = this.allCurrencyHourFiltered;
      let timestamp, value, firstItem, lastItem;

      let allCurrencyHourCoordenate = allCurrencyHourFiltered.map(item => {
        timestamp = new Date(`${item.date.year}-${item.date.month + 1}-${item.date.day} ${item.date.hour}:00`).getTime();
        value = item.variation;
        return [timestamp, value]
      });

      firstItem = allCurrencyHourFiltered[0].date;
      lastItem = allCurrencyHourFiltered[allCurrencyHourFiltered.length - 1].date;

      this.renderChart({
        name: this.modalType.title,
        days: 3,
        minDate: {
          year: lastItem.year,
          month: lastItem.month,
          day: lastItem.day
        },
        maxDate: {
          year: firstItem.year,
          month: firstItem.month,
          day: firstItem.day == lastItem.day ? firstItem.day + 1 : firstItem.day
        },
        data: allCurrencyHourCoordenate
      });

    }

  },

  computed: {
    allCurrencyHour: function(){

      let currencies = this.currencies;
      let allCurrencyHour = [];

      currencies.forEach(currency => {
        currency.forEach(currencyHour => allCurrencyHour.push(currencyHour))
      });

      this.filterFinancesData(allCurrencyHour, allCurrencyHourFiltered => {

        this.allCurrencyHourFiltered = allCurrencyHourFiltered;
        this.mountChart();
      });

      return allCurrencyHour;
    }
  }


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/components/modal.scss";
</style>
