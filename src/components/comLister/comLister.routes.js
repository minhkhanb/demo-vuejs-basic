import ComponentList from '@/components/comLister/ComponentList';
import Users from '@/components/comLister/Users';
import UserAdd from '@/components/comLister/UserAdd';

export default [
  {
    path: '',
    component: ComponentList,
    name: 'components.list',
  },
  {
    path: '/users',
    component: Users,
    name: 'components.users',
  },
  {
    path: 'userAdd',
    component: UserAdd,
    name: 'components.add',
  },
];
