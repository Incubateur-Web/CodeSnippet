<template>
<div class="relative m-2">
  <button
    class="flex justify-center items-center | hover:border-white focus:outline-none
    focus:border-white"
    @click="isShowSignUp = true"
  >
    Log In
  </button>
  <div v-if="isShowSignUp" class="fixed inset-0
    w-full h-screen z-20 bg-black opacity-25"
        @click="isShowSignUp = false"></div>
  <div class="absolute z-30 right-0 mt-2" :class="{'hidden': !isShowSignUp}">
    <div class="rounded-lg shadow-lg py-2 form-class">
      <form @submit.prevent="login">
        <div class="w-full flex flex-wrap">
          <div class="flex flex-col m-auto">
              <div class="flex flex-col w-full m-0">
                <div class="flex flex-col pt-4">
                    <label for="login" class="text-lg text-black">Login or Email</label>
                    <input
                      required
                      type="text"
                      name="login"
                      id="login"
                      placeholder=""
                      v-model="form.login"
                      class="
                      shadow
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-black
                      mt-1
                      leading-tight
                      focus:outline-none
                      focus:shadow-outline"
                      />
                </div>
                <div class="flex flex-col pt-4">
                    <label for="password" class="text-lg text-black">Password</label>
                    <div class="flex">
                      <input
                        required
                        name="password"
                        :type="passwordVisible ? 'text' : 'password'"
                        id="password"
                        placeholder=""
                        v-model="form.password"
                        class="
                        shadow
                        appearance-none
                        border
                        rounded
                        flex-1
                        py-2
                        px-3
                        text-black
                        mt-1
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline"
                        />
                      <button
                        type="button"
                        @click="togglePasswordVisibility"
                        id="view-password"
                        class="
                        appearance-none
                        border-none
                        rounded
                        py-2
                        px-3
                        mt-1
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline"
                        >
                        <v-mdi class="text-black"
                          :name="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                          height="20"
                          width="20"/>
                      </button>
                    </div>
                </div>
                <div class="flex align-center pt-4 mt-8">
                  <input
                    type='submit'
                    :disabled="isLoading == true"
                    value="Log In"
                    class="button-submit shadow sm:rounded-lg
                      cursor-pointer
                      button
                      bg-black
                      text-white
                      font-bold
                      text-lg
                      hover:bg-gray-700
                      flex-1"
                      >
                  <div
                    :style="isLoading ? 'display: block' : 'display: none'"
                    id="is-loading"
                    class="
                      py-2
                      px-3
                      mt-1"
                    >
                    <i class="gg-spinner-two"></i>
                  </div>
                </div>
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
  name: 'login',
  data() {
    return {
      isShowSignUp: false,
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
<style scoped lang="scss">
  .form-class{
    width: 18rem;
    border: 1px whitesmoke solid;
    background-color: #fff;
    .button-submit {
      background: #4e54c8;
      background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
    }
  }
</style>
