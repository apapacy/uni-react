module.exports = [
  {
    path: '/',
    exact: true,
    componentName: 'components/home',
  }, {
    path: '/users',
    exact: true,
    componentName: 'components/usersList',
  }, {
    path: '/room',
    exact: false,
    componentName: 'room',
  },
];
