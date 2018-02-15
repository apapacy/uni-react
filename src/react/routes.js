module.exports = [
  {
    path: '/home',
    exact: true,
    // component: Home,
    name: 'home',
    componentName: 'home',
  }, {
    path: '/home/:id',
    exact: true,
    // component: Home,
    name: 'components/home',
    componentName: 'components/home',
  }, {
    path: '/room',
    exact: false,
    // component: Home,
    name: 'room',
    componentName: 'room',
  },
];
