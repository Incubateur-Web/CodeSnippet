<template>
  <div class="login-form">
    <div class="m-2 p-2 vue-heading flex items-center justify-center">
      <v-mdi name="mdi-account-key" height="36" width="36" class="mr-3"></v-mdi>
      <h2>Log In</h2>
    </div>
    <hr class="title-underline w-1/6 m-auto mb-10">
    <form @submit.prevent="login">
      <div class="w-full flex flex-wrap">
          <div class="flex flex-col w-1/2 m-auto">
              <!-- eslint-disable-next-line -->
              <div class="flex flex-col w-full m-0">
                  <div class="flex flex-col pt-4">
                      <label for="login" class="text-lg">Login or Email</label>
                      <input required type="text" name="login" id="login" placeholder="" v-model="form.login" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                  </div>
                  <div class="flex flex-col pt-4">
                      <label for="password" class="text-lg">Password</label>
                      <div class="flex">
                        <input required name="password" :type="passwordVisible ? 'text' : 'password'" id="password" placeholder="" v-model="form.password" class="shadow appearance-none border rounded flex-1 py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                        <button type="button" @click="togglePasswordVisibility" id="view-password" class="appearance-none border-none rounded py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                          <v-mdi :name="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'" height="20" width="20"></v-mdi>
                        </button>
                      </div>
                  </div>
                  <div class="flex align-center pt-4 mt-8">
                    <input type='submit' :disabled="isLoading == true" value="Log In" class="button bg-black text-white font-bold text-lg hover:bg-gray-700 flex-1">
                    <div :style="isLoading ? 'display: block' : 'display: none'" id="is-loading" class="py-2 px-3 mt-1">
                      <i class="gg-spinner-two"></i>
                    </div>
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
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    ...mapActions({
      signIn: 'auth/signIn',
    }),
    login() {
      this.isLoading = true;
      this.signIn(this.form).then((data) => {
        this.isLoading = false;
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.$store.commit('changeState', {
            key: 'token',
            data: data.token,
          });
          localStorage.setItem('isLogged', true);
          window.location.href = '/'; // FIX Mauvaise méthode je pense mais ça marche
        }
      });
    },
  },
};
/* eslint-disable eol-last */
</script>