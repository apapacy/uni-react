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
  // use `some` to imitate `<Switch>` behavior of selecting only
  // the first to match
  routes.some(route => {
    // use `matchPath` here
    const match = matchPath(req.path, route)
    if (match)
      promises.push(route.loadData(match))
    return match
  })

  const context = {}
  Promise.all(promises).then(data => {
    const html = ReactDOMServer.renderToString(
      <StaticRouter
        location={req.url}
        context={context}
      >
        <Router/>
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
