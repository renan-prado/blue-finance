<script>
import Util from '../Utils/';
import Firebase from '../database/firebase';
import Loading from '../components/Loading';
import Swal from 'sweetalert2';

export default {
  name: 'login',

  data(){
    return {
      email: '',
      password: '',
      loading: false,
      publicPath: process.env.BASE_URL,
    }
  },

  created() {

    // requires not to be authenticated
    Util.authPageLogin();
    
  },
  
  components: {
    Loading
  },

  methods:{

    toLogin: function(){

      // loading
      this.loading = true;

      // get email and password
      const email = this.email;
      const password = this.password;

      // create toast alert
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000
      });

      // Firebase Auth Login
      Firebase
        .login(email, password, (code, message) => {
          
          // Disable loading
          this.loading = false;

          // warning Alert
          Toast.fire({
            type: 'warning',
            title: 'O email ou a senha estão incorretos'
          });
        });

    }

  }

};

</script>

<template>
  <div class="main">
    <div class="container">
      
      <Loading v-show="loading" />
      
      <div class="login">

        <div class="login__container">
          
          <div class="login__header">
            <div class="login__logo" :style="`background-image: url(${publicPath}logo_header_blue.png)`"></div>
            <h1> Entrar </h1>
          </div> <!-- ./ Header -->

          <div class="login__content">

            <div class="login__content-section">
              <input type="email" v-model="email" placeholder="Digite seu email" autofocus/>
            </div>

            <div class="login__content-section">
              <input type="password" v-model="password" placeholder="Digite sua senha" @keypress.enter="toLogin" />
            </div>

            <div class="login__content-section">
              <button @click="toLogin"> Entrar </button>
            </div>

          </div> <!-- ./ Content -->

          <div class="login__footer">
            <router-link to="/signup">Criar uma conta</router-link>
          </div>  <!-- ./ Footer -->

        </div> <!-- ./ login__container -->

      </div> <!-- ./ login -->

    </div> <!-- ./ container -->
  </div>
</template>


<style lang="scss">
  @import "../styles/pages/login";
</style>
