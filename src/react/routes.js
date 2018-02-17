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
    path: '/sign-up',
    exact: true,
    componentName: 'pages/login',
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
