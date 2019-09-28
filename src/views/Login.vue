<script>
/* eslint-disable */

</script>

<template>
  <div class="main">
    <div class="container">
      
      <div class="login">

        <div class="login__container">
          
          <!-- Header -->
          <div class="login__header">
            <h1> Entrar </h1>
          </div>

          <!-- Content -->
          <div class="login__content">

            <div class="login__content-section">
              <input type="email" placeholder="Digite seu email" />
            </div>

            <div class="login__content-section">
              <input type="password" placeholder="Digite sua senha" />
            </div>

            <div class="login__content-section">
              <button> Entrar </button>
            </div>

          </div>

          <!-- Footer -->
          <div class="login__footer">
            <router-link to="/signup">Criar uma conta</router-link>
          </div>

        </div> <!-- ./ login__container -->

      </div> <!-- ./ login -->

    </div> <!-- ./ container -->
  </div>
</template>


<style lang="scss">
  @import "../styles/pages/login";
</style>
