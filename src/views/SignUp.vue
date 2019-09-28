<script>
/* eslint-disable */

import Util from '../Utils/';
import Loading from '../components/Loading';

export default {
  name: 'signup',

  created() {
    Util.authPageLogin();
  },

  components: {
    Loading
  }
}

</script>

<template>
  <div class="main">
    <div class="container">

      <div class="login">

        <div class="login__container">
          
          <!-- Header -->
          <div class="login__header">
            <h1> Cadastrar </h1>
          </div>

          <!-- Content -->
          <div class="login__content">

            <div class="login__content-section">
              <input type="email" placeholder="Digite o seu email" />
            </div>

            <div class="login__content-section">
              <input type="password" placeholder="Digite a sua senha" />
            </div>

            <div class="login__content-section">
              <input type="password" placeholder="Confirme a sua senha" />
            </div>

            <div class="login__content-section">
              <button> Cadastrar </button>
            </div>

          </div>

          <!-- Footer -->
          <div class="login__footer">
            <router-link to="/login">Voltar á página de Login</router-link>
          </div>

        </div> <!-- ./ login__container -->

      </div> <!-- ./ login -->

    </div> <!-- ./ container -->
  </div>
</template>


<style lang="scss">
  @import "../styles/pages/login";
</style>
