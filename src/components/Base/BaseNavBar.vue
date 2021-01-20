<template>
  <div>
    <nav class="h-16 text-white flex items-center shadow">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div class="flex">
            <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
              <img src="../../../public/LOGO-02.png" alt="User's avatar"
                   class="
                      rounded-full
                      overflow-hidden
                      w-10 h-10
                   "
              />
              <span class="font-semisolid text-xl tracking-tight p-2">Code Snippet</span>
            </div>
          </div>
          <div class="flex">
            <login/>
            <register/>
          </div>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>
import Login from '../Auth/Login.vue';
import Register from '../Auth/Register.vue';

export default {
  components: { Login, Register },
  name: 'BaseNavBar',
  data: () => ({
    isShowSignUp: false,
    dialog2: false,

  }),
};
</script>

<style scoped>

</style>
