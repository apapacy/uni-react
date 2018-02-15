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
    path: '/users/page/:page',
    exact: true,
    componentName: 'components/usersList',
  }, {
    path: '/users/:id',
    exact: true,
    componentName: 'components/user',
  },
];
