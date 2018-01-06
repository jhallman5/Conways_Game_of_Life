import React from 'react'
import { ButtonGroup } from 'react-bootstrap';

import Button from '../components/Button'

export default class Options extends React.Component {
  play(){
    alert('YO')
  }
  render(){
    return(
      <ButtonGroup>
        <Button type={this.play} description="Play"/>
      </ButtonGroup>
    )
  }
}
