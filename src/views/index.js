import React from 'react'
import ReactDOM from 'react-dom'

import Board from './containers/Board'

const App = () => (
  <div>
    <h1>Conway's Game of Life</h1>
    <Board />
  </div>
)

ReactDOM.render( <App /> ,document.getElementById('app'))
