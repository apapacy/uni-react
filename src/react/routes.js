module.exports = [
  {
    path: '/',
    exact: true,
    componentName: 'pages/home',
  }, {
    path: '/new-post',
    exact: true,
    componentName: 'pages/editor',
  }, {
    path: '/users/page/:page',
    exact: true,
    componentName: 'components/usersList',
  }, {
    path: '/users/:id',
    exact: true,
    componentName: 'components/user',
  }, {
    path: '*',
    exact: false,
    componentName: 'components/notFound',
  },
];
