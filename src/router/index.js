import Vue from 'vue';
import VueRouter from 'vue-router';

// import mapActions from 'vuex';
import store from '../store';

// import Home from '../views/Home.vue';
import LandingPage from '../views/LandingPage.vue';
import Account from '../components/Auth/Account.vue';
import Logout from '../components/Auth/Logout.vue';

// Snippets
import Snippets from '../views/Snippets.vue';
import AllSnippets from '../views/snippets/Dashboard.vue';
import CreateSnippet from '../views/snippets/Create.vue';
import EditSnippet from '../views/snippets/Edit.vue';
// import ManageSnippet from '../views/snippets/Manage.vue';

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

/* Error Pages */
import ErrorPage from '../views/Error.vue';
import Error401 from '../views/error/401.vue';
import Error403 from '../views/error/403.vue';
import Error404 from '../views/error/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage,
    meta: {
      requiresAuth: false,
      alternativeLink: '/snippets',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: LandingPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/snippets',
    component: Snippets,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'All Snippets',
        component: AllSnippets,
      },
      {
        path: 'create',
        name: 'Create Snippet',
        component: CreateSnippet,
      },
      {
        path: 'edit',
        name: 'Edit Snippet',
        component: EditSnippet,
      },
      {
        path: 'manage',
        name: 'Manage Snippet',
        component: EditSnippet,
      },
    ],
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
  {
    path: '/error',
    component: ErrorPage,
    children: [
      {
        path: '401',
        name: '401 Unauthorized',
        component: Error401,
      },
      {
        path: '403',
        name: '403 Forbidden',
        component: Error403,
      },
      {
        path: '404',
        name: '404 Not Found',
        component: Error404,
      },
    ],
  },
  {
    path: '*',
    component: ErrorPage,
    children: [
      {
        path: '',
        name: 'Page Not Found',
        component: Error404,
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
  if (to.matched.some((record) => record.meta.requiresAuth) || (store.state.auth.logged && store.state.auth.token && to.meta.alternativeLink)) {
    if (!store.state.auth.logged || !store.state.auth.token) {
      console.log('1');
      next({
        path: '/',
        query: { redirect: to.fullPath },
      });
    } else {
      console.log('2');
      // REQUËTE BLOQUEE : parfois le "then" n'est jamais trigger
      store.dispatch('auth/verifyToken', store.state.auth.token).then(({ isSigned }) => {
        console.log('3');
        if (isSigned) {
          console.log('4');
          if (to.matched.some((record) => record.meta.alternativeLink)) {
            next({
              path: to.meta.alternativeLink,
            });
          } else {
            next();
          }
        } else {
          console.log('5');
          next({
            path: '/',
            query: { redirect: to.fullPath },
          });
        }
      }, (error) => {
        console.log('2.1');
        console.error('Got nothing from server. Prompt user to check internet connection and try again');
        console.error(error);
      });
      console.log('6');
    }
  } else {
    console.log('7');
    next();
  }
});

export default router;
