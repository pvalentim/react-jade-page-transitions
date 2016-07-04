import React from 'react'
const jade = require('react-jade')
import { Link } from 'react-router'

const template = jade.compileFile(__dirname + '/app.pug')

export default class AppView extends React.Component {
  render () {
    return template.apply(this, [{ Link }])
  }
}
