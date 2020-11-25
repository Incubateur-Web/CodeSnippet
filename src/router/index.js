import Vue from 'vue';
import VueRouter from 'vue-router';
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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
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
