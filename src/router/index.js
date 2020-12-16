import Vue from 'vue';
import VueRouter from 'vue-router';

// import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../components/Auth/Login.vue';
import Register from '../components/Auth/Register.vue';
import Account from '../components/Auth/Account.vue';
import Logout from '../components/Auth/Logout.vue';
import Snippets from '../views/Snippets.vue';
import Admin from '../views/Admin.vue';
import Dashboard from '../views/admin/Dashboard.vue';
import Users from '../views/admin/Users.vue';
import UserDetails from '../views/admin/UserDetails.vue';
import Projects from '../views/admin/Projects.vue';
import ProjectDetails from '../views/admin/ProjectDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/snippets/all-snippets',
  },
  {
    path: '/snippets/:folderId',
    name: 'Snippets',
    component: Snippets,
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
  {
    path: '/admin',
    redirect: '/admin/dashboard',
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'users',
        name: 'Users',
        component: Users,
      },
      {
        path: 'users/:idUser',
        name: 'User Details',
        component: UserDetails,
      },
      {
        path: 'projects',
        name: 'Projects',
        component: Projects,
      },
      {
        path: 'projects/:idProject',
        name: 'Project Details',
        component: ProjectDetails,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
