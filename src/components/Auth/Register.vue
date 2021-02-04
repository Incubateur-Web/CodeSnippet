<template>
  <div class="relative m-2">
    <button
      class="flex justify-center items-center | hover:border-white focus:outline-none
      focus:border-white"
      @click="dialog2 = true"
    >
      Sign Up
    </button>
    <div v-if="dialog2" class="fixed inset-0
      w-full h-screen z-20 bg-black opacity-25"
         @click="dialog2 = false"></div>
    <div class="absolute z-30 right-0 mt-2" :class="{'hidden': !dialog2}">
      <div class="rounded-lg shadow-lg py-2 px-5 form-class bg-white">
        <form @submit.prevent="register" autocomplete="off">
          <div class="w-full flex flex-wrap">
            <div class="flex flex-col m-auto">
              <!-- eslint-disable-next-line -->
              <div class="flex flex-col w-full m-0">
                <div class="flex flex-col pt-4">
                  <label for="login" class="text-lg text-black">Username</label>
                  <input v-bind:class="{ 'input-error': errorsInput.login }" autocomplete="off" required type="text" name="login" id="login" placeholder="" v-model="form.login" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="flex flex-col pt-4">
                  <label for="email" class="text-lg text-black">Email</label>
                  <input v-bind:class="{ 'input-error': errorsInput.email }" autocomplete="off" required type="email" name="email" id="email" placeholder="" v-model="form.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="flex flex-col pt-4">
                  <label for="password" class="text-lg text-black">Password</label>
                  <div class="flex">
                    <input v-bind:class="{ 'input-error': errorsInput.password }" autocomplete="off" required name="password" :type="passwordVisible ? 'text' : 'password'" id="password" placeholder="" v-model="form.password" class="shadow appearance-none border rounded flex-1 py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                    <button type="button" @click="togglePasswordVisibility" id="view-password" class="appearance-none border-none rounded py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline text-black">
                      <v-mdi :name="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'" height="20" width="20"></v-mdi>
                    </button>
                  </div>
                </div>
                <div class="flex flex-col pt-4">
                  <label class="flex items-center text-black">
                    <input type="checkbox" class="form-checkbox" required>
                    <span class="ml-2">I agree to the <a href="#" class="underline hover:text-blue-500">privacy policy</a></span>
                  </label>
                </div>
                <div v-if="errors.length" class="mt-3 flex items-center text-sm font-bold px-4 py-3 bg-red-lightest border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative" role="alert">
                  <v-mdi name="mdi-alert-circle-outline" height="20" width="20" class="mr-3"></v-mdi>
                  <div>
                    <p v-for="(error) in errors" :key="error.id">{{error.message}}</p>
                  </div>
                </div>
                <div id="signUp-btn" class="flex align-center mt-4">
                  <div class="form-input-icon">
                    <i :style="(isLoading && isSendable)? 'display: block' : 'display: none'" id="is-loading" class="gg-spinner-two"></i>
                    <v-mdi name='mdi-send' :style="(isSendable && !isLoading) ? 'display: block;' : 'display: none;'" height="20" width="20"></v-mdi>
                    <v-mdi name='mdi-lock' :style="(!isSendable && !isLoading) ? 'display: block;' : 'display: none;'" height="20" width="20"></v-mdi>
                  </div>
                  <input type='submit' :disabled="(isLoading || !isSendable) == true" value="Sign Up" class="p-2 button bg-black text-white font-bold text-lg hover:bg-gray-700 flex-1">
                </div>
                <!-- <div class="flex flex-col mt-5">
                  <a id="login-with-github" v-tooltip="{content: 'En cours de développement', placement: 'bottom'}" href="#" disabled data-network="Github" class="button flex justify-center items-center">
                    <v-mdi name="mdi-github" height="36" width="36" class="mr-3"></v-mdi>
                    <span>Sign Up with GitHub</span>
                  </a>
                </div> -->
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      dialog2: false,
      form: {
        login: '',
        email: '',
        password: '',
      },
      passwordVisible: false,
      isLoading: false,
      isSendable: true,
      errors: [],
      errorsInput: {
        login: false,
        email: false,
        password: false,
      },
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    ...mapActions({
      signUp: 'auth/signUp',
    }),
    checkForm() {
      this.errors = [];
      if (!this.form.login) {
        this.errors.push({ name: 'login', message: 'You need to fill the username field to sign up !' });
        this.errorsInput.login = true;
      }
      if (!this.form.email) {
        this.errors.push({ name: 'email', message: 'The email field is required' });
        this.errorsInput.password = true;
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
    register() {
      this.checkForm();
      if (this.isSendable) {
        this.isLoading = true;
        this.signUp(this.form).then((response) => {
          if (response.error) {
            let errorFound;
            if (response.error.errors) {
              errorFound = response.error.errors[0].error_description;
            } else {
              errorFound = response.error.error_description;
            }
            if (errorFound) this.errors.push({ name: 'script', message: errorFound });
            this.isLoading = false;
          } else if (response.token) {
            localStorage.setItem('token', response.token);
            this.$store.commit('changeState', {
              key: 'token',
              data: response.token,
            });
            this.$router.push({ name: 'Account' });
          }
        });
      }
    },
  },
};
/* eslint-disable eol-last */
</script>
