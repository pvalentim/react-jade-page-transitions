import React from 'react'
import jade from 'react-jade'
import { Link } from 'react-router'

const template = jade.compileFile(__dirname + '/home.pug')

export default class Home extends React.Component {
  render () {
    return template.apply(this)
  }
}
