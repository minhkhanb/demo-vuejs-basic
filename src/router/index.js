import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/login';

import ComListerRouteView from '@/components/comLister/ComListerRouteView';
import ComListerRoutes from '@/components/comLister/comLister.routes';

Vue.use(Router);

export default new Router({
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
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
