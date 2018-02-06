import Home from './react/home';

export default [
  { path: '/1234',
    exact: true,
    component: Home,
    loadData: () => getSomeData(),
  },
];

async function getSomeData() {
  console.log('data loaded');
}
