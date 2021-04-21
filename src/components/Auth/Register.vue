<template>
  <div class="relative m-2">
    <button-ui icon
      @click="dialog2 = true"
      >
      <mdicon name="account-plus-outline" size="20" class="mr-2"></mdicon>
      Sign Up
    </button-ui>
    <div v-if="dialog2" class="fixed inset-0
      w-full h-screen z-20 bg-black opacity-25"
         @click="dialog2 = false"></div>
    <div class="absolute z-30 right-0 mt-2" :class="{'hidden': !dialog2}">
      <div class="rounded-lg shadow-lg py-2 px-5 form-class bg-card">
        <form @submit.prevent="register" autocomplete="off">
          <div class="w-full flex flex-wrap">
            <div class="flex flex-col m-auto">
              <!-- eslint-disable-next-line -->
              <div class="flex flex-col w-full m-0">
                <div class="flex flex-col pt-4">
                  <label for="login" class="text-lg text-default">Username</label>
                  <input v-bind:class="{ 'input-error': errorsInput.login }" autocomplete="off" required type="text" name="login" id="login" placeholder="" v-model="form.login" class="bg-gray-300  appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="flex flex-col pt-4">
                  <label for="email" class="text-lg text-default">Email</label>
                  <input v-bind:class="{ 'input-error': errorsInput.email }" autocomplete="off" required type="email" name="email" id="email" placeholder="" v-model="form.email" class="bg-gray-300  appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="flex flex-col pt-4">
                  <label for="password" class="text-lg text-default">Password</label>
                  <div class="flex">
                    <input v-bind:class="{ 'input-error': errorsInput.password }" autocomplete="off" required name="password" :type="passwordVisible ? 'text' : 'password'" id="password" placeholder="" v-model="form.password" class="bg-gray-300  appearance-none border rounded flex-1 py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                    <button type="button" @click="togglePasswordVisibility" id="view-password" class="appearance-none border-none rounded py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline text-default">
                      <mdicon :name="passwordVisible ? 'eye-off' : 'eye'" height="20" width="20"></mdicon>
                    </button>
                  </div>
                </div>
                <div class="flex flex-col pt-4">
                  <label class="flex items-center text-default">
                    <input type="checkbox" class="form-checkbox" required>
                    <span class="ml-2">I agree to the <a href="#" class="underline hover:text-blue-500">privacy policy</a></span>
                  </label>
                </div>
                <div v-if="errors.length" class="mt-3 flex items-center text-sm font-bold px-4 py-3 bg-red-lightest border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative bg-red-500" role="alert">
                  <!-- <mdicon name="alert-circle-outline" height="20" width="20" class="mr-3"></mdicon> -->
                  <div>
                    <p v-for="(error) in errors" :key="error.id">{{error.message}}</p>
                  </div>
                </div>
                <div id="signUp-btn" class="flex align-center mt-4">
                  <button icon type="submit" class="flex justify-center items-center form-input-icon p-2 button bg-black text-white font-bold text-lg hover:bg-blue-500 focus:bg-blue-500 flex-1 rounded-full"
                    :disabled="(isLoading || !isSendable) == true">
                    <i v-if="isLoading" id="is-loading" class="gg-spinner-two mr-3"></i>
                    <mdicon v-if="isSendable && !isLoading" name='send' height="20" width="20" class="mr-3"></mdicon>
                    <mdicon v-if="!isSendable && !isLoading" name='lock' height="20" width="20" class="mr-3"></mdicon>
                    Sign Up
                  </button>
                </div>
                <!-- <div class="flex flex-col mt-5">
                  <a id="login-with-github" v-tooltip="{content: 'En cours de développement', placement: 'bottom'}" href="#" disabled data-network="Github" class="button flex justify-center items-center">
                    <mdicon name="github" height="36" width="36" class="mr-3"></mdicon>
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
        this.errors.push({ name: 'login', message: 'You need a username to register' });
        this.errorsInput.login = true;
      }
      if (!this.form.email) {
        this.errors.push({ name: 'email', message: 'The email field is required' });
        this.errorsInput.password = true;
      }
      if (!this.form.password) {
        this.errors.push({ name: 'password', message: 'You need a password to register' });
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
