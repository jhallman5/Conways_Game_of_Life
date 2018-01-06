import React from 'react'

import Cell from '../components/Cell'

export default class Board extends React.Component {
  constructor(){
    super()
    this.rows = 30
    this.cols = 50
    this.state = {
      generation: 0,
      boardState: new Array(this.rows).fill(new Array(this.cols).fill(false))
    }
  }

  render(){
    const width = this.cols * 16
    const boardArr = []

    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        let cellId = i + '_' + j
        let cellStatus = this.state.boardState[i][j] ? "cell alive" : "cell dead"
        boardArr.push(
          <Cell
            status={cellStatus}
            key={cellId}
            id={cellId}
            row={i}
            col={j}
          />
        )
      }
    }

    return (
      <div className="center board" style={{width: width}}>
        {boardArr}
      </div>
    )
  }
}
