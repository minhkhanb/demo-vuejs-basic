import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/login';
import Animation from '@/components/animations/Animations';
import Practice from '@/components/practice-test';

import ComListerRouteView from '@/components/comLister/ComListerRouteView';
import ComListerRoutes from '@/components/comLister/comLister.routes';
import Popup from '@/components/popup/popup';

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
    {
      path: '/popup',
      name: 'Popup',
      component: Popup,
    },
    {
      path: '/animation',
      name: 'Animation',
      component: Animation,
    },
    {
      path: '/practice-test',
      name: 'Practice',
      component: Practice,
    },
  ],
});
