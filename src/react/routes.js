// import Home from './home';

module.exports = [
  {
    path: '/home',
    exact: true,
    // component: Home,
    componentName: 'home'
  }, {
    path: '/home/:id',
    exact: true,
    // component: Home,
    componentName: 'components/home'
  }, {
    path: '/room',
    exact: false,
    // component: Home,
    componentName: 'room'
  },
];
