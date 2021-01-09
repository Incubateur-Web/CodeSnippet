import Vue from 'vue';
import VueRouter from 'vue-router';
import Snippets from '../views/Snippets.vue';

/** Admin */
import Admin from '../views/Admin.vue';
import Dashboard from '../views/admin/Dashboard.vue';

/** Admin Users */
import Users from '../views/admin/Users.vue';
import User from '../views/admin/users/User.vue';
import UserDetails from '../views/admin/users/UserDetails.vue';

/** Admin Projects */
import Projects from '../views/admin/Projects.vue';
import Project from '../views/admin/projects/Project.vue';
import ProjectDetails from '../views/admin/projects/ProjectDetails.vue';
import ProjectTeam from '../views/admin/projects/ProjectTeam.vue';
import ProjectContent from '../views/admin/projects/ProjectContent.vue';

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
        name: 'User',
        component: User,
        children: [
          {
            path: '',
            name: 'User Details',
            component: UserDetails,
          },
        ],
      },
      {
        path: 'projects',
        name: 'Projects',
        component: Projects,
      },
      {
        path: 'projects/:idProject',
        name: 'Project',
        component: Project,
        children: [
          {
            path: '',
            name: 'Project Details',
            component: ProjectDetails,
          },
          {
            path: 'team',
            name: 'Project Team',
            component: ProjectTeam,
          },
          {
            path: 'content',
            name: 'Project Content',
            component: ProjectContent,
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

export default router;
