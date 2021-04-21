<template>
  <div class="login-form">
    <div class="m-2 p-2 vue-heading flex items-center justify-center">
      <span class="mr-2">👋</span>
      <h2>Hello, {{ this.$store.state.auth.username }}</h2>
    </div>
    <hr class="title-underline w-1/6 m-auto mb-10">
    <div class="m-2 p-2  flex items-center justify-center">
      <div class="w-2/3 rounded-lg shadow-lg py-2 px-5 form-class bg-dark">
        <div class="w-full m-4 p-4 flex items-center justify-center">
          <br>
          <form class="w-full">
            <div class="w-full form-group mb-5">
              <label>Username<br>
                <input placeholder="Test8" type="text" name="Name"
                       class="w-full flex-shrink flex-grow flex-auto text-black leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"/>
              </label>
            </div>

            <div class="w-full form-group mb-5">
              <label>Email address<br>
                <input placeholder="test@email.com" type="email" name="email"
                       class="w-full flex-shrink flex-grow flex-auto text-black leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"/>
              </label>
            </div>
            <div class="w-full form-group mb-5">
              <label>Old Password<br>
                <input type="password" name="password"
                       class="w-full flex-shrink flex-grow flex-auto text-black leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"/>
              </label>
            </div>
            <div class="w-full form-group mb-5">
              <label>New Password<br>
                <input type="password" name="password"
                       class="w-full flex-shrink flex-grow flex-auto text-black leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"/>
              </label>
            </div>
            <div class="w-full form-group mb-5">
              <label>Confirm Password<br>
                <input type="password" name="password"
                       class="w-full flex-shrink flex-grow flex-auto text-black leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"/>
              </label>
            </div>
            <br>
            <div class="w-full flex justify-between">
              <button type="reset">Cancel Changes</button>
              <button-ui icon default
                         class="primary w-full md:w-1/4 uppercase font-bold text-default hover:bg-blue-500 py-3 px-5 rounded-full">
              <span class="text-uppercase mr-3">
                Edit Profile
              </span>
                <svg viewBox="0 0 24 24" height="20" width="20" fill="currentColor" class="mr-3 mdi-icon"
                     style="transform: rotate(0deg); display: block;">
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
                </svg>
              </button-ui>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="m-2 p-2  flex items-center justify-center">
      <div class="w-2/3 rounded-lg shadow-lg py-2 px-5 form-class bg-dark border border-danger">
        <div class="w-full m-4 p-4 flex items-center justify-center">
          <h3>Deleting your account will wipe all information about you and content you’ve created on Code Snippet. If
            you managed personal projects or group projects, they will be completely deleted.</h3>
        </div>
        <button-ui icon default type="danger"
                   class=" w-full md:-1/4 uppercase font-bold text-default py-3 px-5 rounded-full">
              <span class="text-uppercase mr-3">
                Delete Account
              </span>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"/>
          </svg>
        </button-ui>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  created() {
  },
  computed: {
    mobileMenu() {
      return this.$store.state.mobileMenu;
    },
    logged() {
      return this.$store.state.logged;
    },
    ...mapState({
      logged: true,
      token: 'token',
      username: 'username',
    }),
  },
  methods: {
    ...mapActions({
      verifyToken: 'auth/verifyToken',
    }),
  },
  mounted() {
  },
};
/* eslint-disable eol-last */
</script>
