import ComponentList from '@/components/comLister/ComponentList';
import ComponentDemo from '@/components/comLister/ComponentDemo';

export default [
  {
    path: '',
    component: ComponentList,
    name: 'components.list',
  },
  {
    path: 'demo/:comName',
    component: ComponentDemo,
    name: 'components.demo',
  },
];
