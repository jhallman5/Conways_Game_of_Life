import React from 'react'

const Button = props => (
  <button className="btn btn-default" onClick={props.type} >
    {props.description}
  </button>
)

export default Button
