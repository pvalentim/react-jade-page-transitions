import React from 'react'
const jade = require('react-jade')
import { Link } from 'react-router'

const template = jade.compileFile(__dirname + '/about.pug')

export default class About extends React.Component {
  render () {
    return template.apply(this)
  }
}
