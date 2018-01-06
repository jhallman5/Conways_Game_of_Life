import React from 'react'

const Cell = props => (
  <div
    className={props.status}
    id={props.id}
  />
)

export default Cell
