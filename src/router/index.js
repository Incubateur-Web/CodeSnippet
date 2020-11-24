import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../components/Auth/Login.vue';
import Register from '../components/Auth/Register.vue';
import Account from '../components/Auth/Account.vue';
import Logout from '../components/Auth/Logout.vue';
// import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:folderId',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      guest: true,
    },
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: {
      guest: false,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: {
      guest: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
