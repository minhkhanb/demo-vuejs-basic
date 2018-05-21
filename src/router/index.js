import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/login';

import ComListerRouteView from '@/components/comLister/ComListerRouteView';
import ComListerRoutes from '@/components/comLister/comLister.routes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/components-list',
      component: ComListerRouteView,
      children: ComListerRoutes,
    },
  ],
});
