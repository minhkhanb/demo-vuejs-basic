// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import Users from '@/components/comLister/users';
import UserAdd from '@/components/comLister/users/UserAdd';
import UserList from '@/components/comLister/users/UserList';

import App from './App';
import router from './router';

Vue.component('users', Users);
Vue.component('user-add', UserAdd);
Vue.component('user-list', UserList);

Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
});

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
});
