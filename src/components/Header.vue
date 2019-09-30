<template>
  <div class="header">
  
    <div class="main">
      <div class="container">
        
        <router-link to="/">
          <div class="header__logo" :style="`background-image: url(${publicPath}logo_header.svg)`"></div>
        </router-link>

        <button @click="logout"> Sair </button>

      </div> <!-- ./ container -->
    </div> <!-- ./ main -->

  </div>
</template>

<script>

import Firebase from '../database/firebase'

export default {
  name: 'Header',

  data(){
    return {
      publicPath: process.env.BASE_URL,
    }
  },

  methods: {
    logout: function(){
      Firebase.logout();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/components/header.scss";
</style>
