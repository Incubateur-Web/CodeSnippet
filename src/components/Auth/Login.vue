<template>
  <div class="sign-form">
    <div class="m-2 p-2 vue-heading flex items-center justify-center">
      <v-mdi name="mdi-account-key" height="36" width="36" class="mr-3"></v-mdi>
      <h2>Log In</h2>
    </div>
    <hr class="title-underline w-1/6 m-auto mb-10">
    <form @submit.prevent="login" >
      <div class="w-full flex flex-wrap">
          <div class="flex flex-col w-1/2 m-auto">
              <!-- eslint-disable-next-line -->
              <div class="flex flex-col w-full m-0">
                  <div class="flex flex-col pt-4 form-group">
                      <label for="login" class="text-lg">Login or Email</label>
                      <input v-on:blur="checkForm" required type="text" name="login" id="login" placeholder="" value="" v-model="form.login" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                  </div>
                  <div class="flex flex-col pt-4">
                      <label for="password" class="text-lg">Password</label>
                      <div class="flex">
                        <input v-on:blur="checkForm" required name="password" :type="passwordVisible ? 'text' : 'password'" id="password" placeholder="" v-model="form.password" class="shadow appearance-none border rounded flex-1 py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                        <button type="button" @click="togglePasswordVisibility" id="view-password" class="appearance-none border-none rounded py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                          <v-mdi :name="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'" height="20" width="20"></v-mdi>
                        </button>
                      </div>
                  </div>
                  <div class="flex flex-col pt-4 align-flex-end">
                    <div class="text-sm">
                      <a href="#" class="font-medium text-white-600 hover:text-blue-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div v-if="errors.length" class="flex items-center bg-blue text-white text-sm font-bold px-4 py-3" role="alert">
                    <v-mdi name="mdi-alert-circle-outline" height="20" width="20" class="mr-3"></v-mdi>
                    <div>
                      <p v-for="(error) in errors" :key="error.id">{{error.message}}</p>
                    </div>
                  </div>
                  <div class="flex align-center pt-4 mt-8">
                    <div class="form-input-icon">
                      <i :style="(isLoading && isSendable)? 'display: block' : 'display: none'" id="is-loading" class="gg-spinner-two"></i>
                      <v-mdi :name="(isSendable && !isLoading) ? 'mdi-send' : 'mdi-lock'" height="20" width="20"></v-mdi>
                    </div>
                    <input type='submit' :disabled="(isLoading || !isSendable) == true" value="Log In" class="button bg-black text-white font-bold text-lg hover:bg-gray-700 flex-1">
                  </div>
                  <!-- <div class="flex flex-col mt-5">
                    <a id="login-with-github" v-tooltip="{content: 'En cours de développement', placement: 'bottom'}" href="#" disabled data-network="Github" class="button flex justify-center items-center">
                      <v-mdi name="mdi-github" height="36" width="36" class="mr-3"></v-mdi>
                      <span>Log In with GitHub</span>
                    </a>
                  </div> -->
              </div>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
      passwordVisible: false,
      isLoading: false,
      isSendable: false,
      errors: [],
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    ...mapActions({
      signIn: 'auth/signIn',
    }),
    checkForm() {
      this.errors = [];
      document.getElementById('login').focus();
      document.getElementById('password').focus();
      if (!this.form.login) {
        this.errors.push({ name: 'login', message: 'The login / email field is required !' });
        // class error add
      }
      if (!this.form.password) {
        this.errors.push({ name: 'password', message: 'How do you want to log in without a password ?' });
        // class error add
      }
      if (!this.errors.length) {
        // remove class error
        this.isSendable = true;
      }
    },
    login() {
      this.isLoading = true;
      this.signIn(this.form).then((data) => {
        this.isLoading = false;
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.username);
          // enlever le localstorage et le mettre dans les actions vuex
          // dispatch !
          this.$store.commit('changeState', {
            key: 'token',
            data: data.token,
            username: data.username,
          });
          localStorage.setItem('isLogged', true); // ça on s'en fou
          // l'idée sera de refresh le token dès qu'on accède à une page
          // comme ça la personne est déco si elle est inactive depuis 1h
          window.location.href = '/'; // FIX Mauvaise méthode je pense mais ça marche
        }
      });
    },
  },
  created() {
    this.checkForm();
  },
};
/* eslint-disable eol-last */
</script>