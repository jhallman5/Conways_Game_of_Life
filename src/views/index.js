import React from 'react'
import ReactDOM from 'react-dom'

import Board from './containers/Board'
import Options from './containers/Options'

const App = () => (
  <div>
    <h1>Conway's Game of Life</h1>
    <Options />
    <Board />

  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
