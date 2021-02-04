import Vue from 'vue';
import VueRouter from 'vue-router';

// import mapActions from 'vuex';
import store from '../store';

// import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../components/Auth/Login.vue';
import Register from '../components/Auth/Register.vue';
import Account from '../components/Auth/Account.vue';
import Logout from '../components/Auth/Logout.vue';
import Snippets from '../views/Snippets.vue';

/** Admin */
import Admin from '../views/Admin.vue';
import Dashboard from '../views/admin/Dashboard.vue';

/** Admin Users */
import adminUsers from '../views/admin/Users.vue';
import adminUser from '../views/admin/users/User.vue';
import adminUserDetails from '../views/admin/users/UserDetails.vue';

/** Admin Projects */
import adminProjects from '../views/admin/Projects.vue';
import adminProject from '../views/admin/projects/Project.vue';
import adminProjectDetails from '../views/admin/projects/ProjectDetails.vue';
import adminProjectTeam from '../views/admin/projects/ProjectTeam.vue';
import adminProjectContent from '../views/admin/projects/ProjectContent.vue';

/** Admin Snippets */
import adminSnippets from '../views/admin/Snippets.vue';
import adminSnippet from '../views/admin/snippets/Snippet.vue';
import adminSnippetDetails from '../views/admin/snippets/SnippetDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/snippets/all-snippets',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/snippets/:folderId',
    name: 'Snippets',
    component: Snippets,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: {
      requiresAuth: true,
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
      requiresAuth: true,
    },
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'dashboard',
        name: 'Admin Dashboard',
        component: Dashboard,
      },
      {
        path: 'users',
        name: 'Admin Users',
        component: adminUsers,
      },
      {
        path: 'users/:idUser',
        name: 'Admin User',
        component: adminUser,
        children: [
          {
            path: '',
            name: 'Admin User Details',
            component: adminUserDetails,
          },
        ],
      },
      {
        path: 'projects',
        name: 'Admin Projects',
        component: adminProjects,
      },
      {
        path: 'projects/:idProject',
        name: 'Admin Project',
        component: adminProject,
        children: [
          {
            path: '',
            name: 'Admin Project Details',
            component: adminProjectDetails,
          },
          {
            path: 'team',
            name: 'Admin Project Team',
            component: adminProjectTeam,
          },
          {
            path: 'content',
            name: 'Admin Project Content',
            component: adminProjectContent,
          },
        ],
      },
      {
        path: 'snippets',
        name: 'Admin Snippets',
        component: adminSnippets,
      },
      {
        path: 'snippets/:idSnippet',
        name: 'Admin Snippet',
        component: adminSnippet,
        children: [
          {
            path: '',
            name: 'Admin Snippet Details',
            component: adminSnippetDetails,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.auth.logged && !store.state.auth.token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      store.dispatch('auth/verifyToken', store.state.auth.token).then(({ isSigned }) => {
        if (isSigned) {
          next();
        } else {
          next({
            path: '/login',
            query: { redirect: to.fullPath },
          });
        }
      });
      next();
    }
  } else {
    next();
  }
});

export default router;
