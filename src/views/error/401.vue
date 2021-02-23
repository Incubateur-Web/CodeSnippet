<template>
  <div class="w-1/3">
    <div class="flex-col justify-content-start">
      <h1 class="text-4xl font-bold uppercase flex items-center">
        <v-mdi
          name="mdi-alert-circle-outline"
          height="40"
          width="40"
          class="mr-3"
        ></v-mdi>
        Error 401
      </h1>
      <h2 class="mt-2 text-3xl">Unauthorized access !</h2>
    </div>
    <hr class="w-2/6 mt-5 mb-10" />
    <p>
      Well, I don't know how you came upon this error but there's nothing to see
      here.
    </p>
    <p>
      You can either
      <b>
        <router-link to="/"> go back home </router-link>
      </b>
      or appreciate this exquisite random cat.
    </p>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
