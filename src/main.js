import Vue from 'vue';
import VCalendar from 'v-calendar';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// (S)CSS
import '~/assets/css/tailwind.css';
import '~/assets/scss/base/theme.scss';
import '~/assets/scss/style.scss';
import 'material-icons/iconfont/material-icons.css';

// Base Components
import '~/components/Base';

// Directives
import '~/directives/VAutofocus';

// Plugins
import '~/plugins/vue-mdijs';
import '~/plugins/v-tooltip';
import '~/plugins/vue-js-modal';

Vue.prototype.$dark = function f(dark = false) {
  const bodyClass = document.body.classList;

  if (dark) {
    bodyClass.replace('light-theme', 'dark-theme');
  } else {
    bodyClass.replace('dark-theme', 'light-theme');
  }
};

Vue.config.productionTip = false;

Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
