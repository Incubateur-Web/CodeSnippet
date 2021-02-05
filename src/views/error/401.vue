<template>
    <div class="w-1/3">
      <div class="flex-col justify-content-start">
        <h2 class="vue-heading">
          <v-mdi name="mdi-alert-circle-outline" height="36" width="36" class="mr-3"></v-mdi>
          Error 401
        </h2>
        <h3>
          Unauthorized access !
        </h3>
      </div>
      <hr class="w-2/6 m-auto mb-10">
      <p>
        Well, I don't know how you came upon this error but there's nothing to see here.
      </p>
      <p>
        You can either
        <b>
          <router-link to="/">
            go back home
          </router-link>
        </b>
        or appreciate this exquisite random cat.
      </p>
    </div>
</template>

<script>

export default {
  components: {
  },
};
</script>
