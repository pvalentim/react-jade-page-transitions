import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Routes from './router'

console.log(Routes)
ReactDOM.render(
  <Router history={browserHistory}>
    { Routes }
  </Router>,
  document.getElementById('app-container')
)

// ReactDOM.render(App(), document.getElementById('app-container'))
