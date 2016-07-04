import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import Home from './pages/home'
import About from './pages/about'

export default (
  <Route name='app' component={App} path='/'>
    <IndexRoute component={Home} />
    <Route name='about' component={About} path='/about' />
  </Route>
)
