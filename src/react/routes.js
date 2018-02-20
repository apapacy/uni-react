module.exports = [
  {
    path: '/',
    exact: true,
    componentName: 'pages/home',
  }, {
    path: '/feed',
    exact: true,
    componentName: 'pages/home',
  }, {
    path: '/author/:author',
    exact: true,
    componentName: 'pages/home',
  }, {
    path: '/favorited/:author',
    exact: true,
    componentName: 'pages/home',
  }, {
    path: '/new-post',
    exact: true,
    componentName: 'pages/editor',
  }, {
    path: '/(sign-up|sign-in)',
    exact: true,
    componentName: 'pages/login',
  }, {
    path: '/settings',
    exact: true,
    componentName: 'pages/settings',
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
