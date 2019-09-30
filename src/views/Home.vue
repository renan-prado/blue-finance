<template>
  <div class="home">
    <Header />
    <FinanceView />
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */

import Util from '../Utils/';
import Firebase from '../database/firebase';
import Header from '../components/Header';
import FinanceView from '../components/FinanceView';

export default {
  name: 'home',

  created() {
    Util.authPage();
  },

  components: {
    Header,
    FinanceView,
  }

};
</script>
