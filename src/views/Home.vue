<template>
  <div class="home">
    <h1>This is an home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */

import Util from '../Utils/';

export default {
  name: 'home',

  created() {
    Util.authPage();
  },

};
</script>
