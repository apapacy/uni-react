import express from 'express';
import './api/test';
const PORT = 3000;
const app = express();

import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './react/home'

app.use(function(req, res, next) {
  const context = {}
  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
    <App/>
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
});

const httpServer = app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});



// export httpServer object so we can access it in bootstrap
module.exports = httpServer;
