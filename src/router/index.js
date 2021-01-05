import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: () => import('../components/pages/create-employee/CreateEmployeeComponent'),
  },
  {
    path: '/list-employees',
    name: 'List Employee',
    component: () => import('../components/pages/list-employee/ListEmployeeComponent'),
  },
  {
    path: '/edit-employee/:id',
    name: 'Edit Employee',
    component: () => import('../components/pages/edit-employee/EditEmployeeComponent'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
