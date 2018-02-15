module.exports = [
  {
    path: '/a',
    exact: true,
    // component: Home,
    componentName: 'components/home',
  }, {
    path: '/home',
    exact: true,
    // component: Home,
    name: 'home',
    componentName: 'home',
  }, {
    path: '/room',
    exact: false,
    // component: Home,
    name: 'room',
    componentName: 'room',
  },
];
