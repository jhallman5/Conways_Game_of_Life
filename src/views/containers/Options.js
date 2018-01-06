import React from 'react'
import { ButtonGroup } from 'react-bootstrap';

import Button from '../components/Button'

export default class Options extends React.Component {
  constructor(props) {
     super(props)
     this.play = this.play.bind(this)
     this.stop = this.stop.bind(this)
  }

  play(){
    this.props.play()
  }
  stop(){
    this.props.stop()
  }
  render(){
    return(
      <ButtonGroup className="center">
        <Button type={this.play} description="Play"/>
        <Button type={this.stop} description="Stop"/>
      </ButtonGroup>
    )
  }
}
