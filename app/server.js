import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './router'

const app = express()

app.use('/assets', express.static('app/dist'))
app.set('view engine', 'pug')

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.render(__dirname + '/index.pug', { reactContent: renderToString(<RouterContext {...renderProps} />) })
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(5000, function () {
  console.log('Serving at http://localhost:5000')
})
