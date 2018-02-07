import express from 'express';
import './api/test';
const PORT = 3000;
const app = express();
import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, Switch, Route } from 'react-router'
import { matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './react/routes';
import AppRouter from './react/router'
import createStore from './redux/store';

app.use(async function(req, res, next) {
  const store = createStore();
  const promises = []
  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match && typeof route.component.getInitialProps == 'function') {
      promises.push(route.component.getInitialProps({req, res, next, match, store}));
    }
    return match;
  })

  Promise.all(promises).then(data => {
    const context = {data};
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <AppRouter/>
        </StaticRouter>
      </Provider>
    )

    if (context.url) {
      res.writeHead(301, {
        Location: context.url
      })
      res.end()
    } else {
      res.write(`
        <!doctype html>
        <div id="app">${html}</div>
      `)
      res.end()
    }
  })
});

const httpServer = app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

module.exports = httpServer;
