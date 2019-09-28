<template>
  <div class="home">
    <h1>This is an home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */

import Util from '../Utils/';
import Firebase from '../database/firebase';

export default {
  name: 'home',

  created() {
    Util.authPage();
    // Firebase.logout();
  },

};
</script>
