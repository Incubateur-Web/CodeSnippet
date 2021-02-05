<template>
  <main class="area w-full">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div id="errorPage">
          <div class="flex items-center justify-center mt5">
            <router-view />
            <div class="w-1/4">
                <div class="error-img-container">
                <img class="rounded-lg" :src="this.images[this.randomIndex].pathLong" alt="😺" />
                </div>
            </div>
          </div>
      </div>
  </main>
</template>

<script>
import '~/assets/scss/pages/_error.scss';

export default {
  components: {
  },
  data() {
    return {
      images: [],
      randomIndex: Math.floor(Math.random() * 2),
    };
  },
  mounted() {
    this.importAll(require.context('../assets/img/randomCats/', true, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) => (this.images.push({ pathLong: r(key), pathShort: key })));
    },
  },
};
</script>
