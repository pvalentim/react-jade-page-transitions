import React from 'react'
const jade = require('react-jade')
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class AppView extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
        <div id='app-view'>
          <ReactCSSTransitionGroup
            transitionName='example'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
              { React.cloneElement(this.props.children, { key: this.props.location.pathname }) }
          </ReactCSSTransitionGroup>
        </div>

      </div>
    )
    // return template.apply(this, [{ Link }])
  }
}
