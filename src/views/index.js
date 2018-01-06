import React from 'react'
import ReactDOM from 'react-dom'

import Board from './containers/Board'

const App = () => (
  <div>
    <h1>Conway's Game of Life</h1>
    <div>Options</div>
    <Board />
    
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
