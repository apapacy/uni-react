import express from 'express';
import './api/test';
const PORT = 3000;
const app = express();
import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, Switch, Route } from 'react-router'
import { matchPath } from 'react-router-dom'
import routes from './routes';
import Router from './router'

app.use(function(req, res, next) {
  const promises = []
  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match && typeof route.component.getInitialProps == 'function') {
      promises.push(route.component.getInitialProps({req, res, next}));
    }
    return match;
  })

  const context = {}
  Promise.all(promises).then(data => {
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <Router data={data[0]}/>
      </StaticRouter>
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
