import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './router'

const app = express()

app.use('/assets', express.static('app/dist'))
app.set('view engine', 'pug')
//
// app.get('/', function (req, res) {
//   res.render(__dirname + '/index.pug')
// })

app.get('*', (req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      res.render(__dirname + '/index.pug', { reactContent: renderToString(<RouterContext {...renderProps} />) })
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(5000, function () {
  console.log('Serving at http://localhost:5000')
})
