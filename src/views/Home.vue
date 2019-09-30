<script>
import Util from '../Utils/';
import Firebase from '../database/firebase';
import Header from '../components/Header';
import FinanceView from '../components/FinanceView';

export default {
  name: 'home',

  created(){

    // requires authentication
    Util.authPage();
    
  },

  components: {
    Header,
    FinanceView,
  }

};
</script>

<template>
  <div class="home">
    <Header />
    <FinanceView />
  </div>
</template>