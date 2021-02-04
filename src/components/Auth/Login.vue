<template>
  <div class="sign-form">
    <div class="m-2 p-2 vue-heading flex items-center justify-center">
      <v-mdi name="mdi-account-key" height="36" width="36" class="mr-3"></v-mdi>
      <h2>Log In</h2>
    </div>
    <hr class="title-underline w-1/6 m-auto mb-10">
    <form @submit.prevent="login" autocomplete="off">
      <div class="w-full flex flex-wrap">
          <div class="flex flex-col w-1/2 m-auto">
              <!-- eslint-disable-next-line -->
              <div class="flex flex-col w-full m-0">
                  <div class="flex flex-col pt-4 form-group">
                      <label for="login" class="text-lg">Username or Email</label>
                      <input v-bind:class="{ 'input-error': errorsInput.login }" required type="text" name="login" id="login" placeholder="" v-model="form.login" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" autofocus>
                  </div>
                  <div class="flex flex-col pt-4">
                      <label for="password" class="text-lg">Password</label>
                      <div class="flex">
                        <input v-on:blur="checkForm" v-bind:class="{ 'input-error': errorsInput.password }" required name="password" :type="passwordVisible ? 'text' : 'password'" id="password" placeholder="" v-model="form.password" class="shadow appearance-none border rounded flex-1 py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" autofocus autocomplete="off">
                        <button type="button" @click="togglePasswordVisibility" id="view-password" class="appearance-none border-none rounded py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                          <v-mdi :name="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'" height="20" width="20"></v-mdi>
                        </button>
                      </div>
                  </div>
                  <div v-if="errors.length" class="mt-3 flex items-center text-sm font-bold px-4 py-3 bg-red-lightest border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative" role="alert">
                    <v-mdi name="mdi-alert-circle-outline" height="20" width="20" class="mr-3"></v-mdi>
                    <div>
                      <p v-for="(error) in errors" :key="error.id">{{error.message}}</p>
                    </div>
                  </div>
                  <div id="logIn-btn" class="flex align-center mt-4">
                    <div class="form-input-icon">
                      <i :style="(isLoading && isSendable)? 'display: block' : 'display: none'" id="is-loading" class="gg-spinner-two"></i>
                      <v-mdi name='mdi-send' :style="(isSendable && !isLoading) ? 'display: block;' : 'display: none;'" height="20" width="20"></v-mdi>
                      <v-mdi name='mdi-lock' :style="(!isSendable && !isLoading) ? 'display: block;' : 'display: none;'" height="20" width="20"></v-mdi>
                    </div>
                    <input type='submit' :disabled="(isLoading || !isSendable) == true" value="Log In" class="p-2 button bg-black text-white font-bold text-lg hover:bg-gray-700 flex-1">
                  </div>
                  <!-- TODO Mot de passe oublié -->
                  <!-- <div class="flex flex-col pt-4 align-flex-end">
                    <div class="text-sm">
                      <a href="#" class="font-medium text-white-600 hover:text-blue-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div> -->
                  <!-- TODO Log In with GitHub -->
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
import { mapActions, mapState } from 'vuex';
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
      isSendable: true, // reset à false quand on a débug le bins de l'autocomplete
      errors: [],
      errorsInput: {
        login: false,
        password: false,
      },
    };
  },
  created() {
    this.$store.dispatch('retrieve').then(({ dark }) => {
      // this.$router.push('/all');
      this.$dark(dark);
      this.retrieved = true;
    });
    if (this.$store.state.auth.token) {
      this.verifyToken(this.$store.state.auth.token).then((result) => {
        if (!result.isSigned) {
          console.log(result.error);
        } else {
          this.$router.push({ name: 'Account' });
        }
      });
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    ...mapActions({
      signIn: 'auth/signIn',
      verifyToken: 'auth/verifyToken',
    }),
    checkForm() {
      this.errors = [];
      if (!this.form.login) {
        this.errors.push({ name: 'login', message: 'The login / email field is required !' });
        this.errorsInput.login = true;
      }
      if (!this.form.password) {
        this.errors.push({ name: 'password', message: 'How do you want to log in without a password ?' });
        this.errorsInput.password = true;
      }
      if (!this.errors.length) {
        this.errorsInput.login = false;
        this.errorsInput.password = false;
        this.isSendable = true;
      }
    },
    login() {
      this.checkForm();
      if (this.isSendable) {
        this.isLoading = true;
        this.signIn(this.form).then((response) => {
          console.log(response);
          if (response.error) {
            let errorMessage;
            if (response.error.error_description) {
              errorMessage = response.error.error_description;
            } else {
              errorMessage = response.error[0].error_description;
            }
            if (errorMessage) this.errors.push({ name: 'script', message: errorMessage });
            this.isLoading = false;
          } else if (this.$store.state.auth.token) {
            this.verifyToken(this.$store.state.auth.token).then((user) => {
              if (user.isSigned) {
                this.$router.push({ name: 'Account' });
              } else {
                this.errors.push({ name: 'script', message: user.error });
                this.isLoading = false;
              }
            });
          }
        });
      }
    },
  },
  computed: {
    ...mapState([
      'auth',
    ]),
  },
};
/* eslint-disable eol-last */
</script>