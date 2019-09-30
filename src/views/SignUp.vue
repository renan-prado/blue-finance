<script>
import Util from '../Utils/';
import Loading from '../components/Loading';
import Firebase from '../database/firebase';
import Swal from 'sweetalert2';

// create Toast Alert
const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 3000
});

export default {
  name: 'signup',

  data(){
    return {
      emailExisting: false,
      email: '',
      password: '',
      passwordConfirm: '',
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

  methods: {

    // validate email format and duplicates cases
    verifyEmail: function(callback){

      // if email validate
      if(!this.validateEmail(this.email)){ 

        Toast.fire({
          type: 'warning',
          title: 'O email está em um formato incorreto'
        });

        this.loading = false;
      }

      else {
        
        // verify duplicates
        Firebase.verifyEmail(this.email, verifyEmail => {
          this.emailExisting = verifyEmail

          if(verifyEmail){

            Toast.fire({
              type: 'warning',
              title: 'Email já cadastrado'
            });

            this.loading = false;
            
          } else {    
            callback();
          }

        });
      }

      
    },

    // validate email format
    validateEmail: function(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    // validate password format and if passwords are the same
    verifyPassword: function(callback){
      const passwordEquals = this.password == this.passwordConfirm;

      if(passwordEquals){
        
        if(this.password.length < 8){
          Toast.fire({
            type: 'warning',
            title: 'A senha tem que conter pelo menos 8 caracteres'
          });
          this.loading = false;
        }

        else{  
          callback();
        }
      }

      else {

        Toast.fire({
          type: 'warning',
          title: 'As senhas estão diferentes'
        });

        this.loading = false;
      }
    },

    // sign up
    signUp: function(){

      this.loading = true;

      this.verifyEmail(() => {
        
        this.verifyPassword(() => {
          Firebase.createUser(this.email, this.password);
        });

      });

    }

  }
}

</script>

<template>
  <div class="main">
    <div class="container">

      <Loading v-show="loading" />

      <div class="login">

        <div class="login__container">
          
          <div class="login__header">
            <div class="login__logo" :style="`background-image: url(${publicPath}logo_header_blue.png)`"></div>
            <h1> Cadastrar </h1>
          </div>  <!-- ./ Header -->

          <div class="login__content">

            <div class="login__content-section">
              <input type="email" v-model="email" placeholder="Digite o seu email" />
            </div>

            <div class="login__content-section">
              <input type="password" v-model="password" placeholder="Digite a sua senha" />
            </div>

            <div class="login__content-section">
              <input type="password" v-model="passwordConfirm" placeholder="Confirme a sua senha" @keypress.enter="signUp" />
            </div>

            <div class="login__content-section">
              <button @click="signUp"> Cadastrar </button>
            </div>

          </div> <!-- ./ Content -->

          <div class="login__footer">
            <router-link to="/login">Voltar á página de Login</router-link>
          </div> <!-- ./ Footer -->

        </div> <!-- ./ login__container -->

      </div> <!-- ./ login -->

    </div> <!-- ./ container -->
  </div>
</template>


<style lang="scss">
  @import "../styles/pages/login";
</style>
