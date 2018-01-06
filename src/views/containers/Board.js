import React from 'react'

import Options from './Options'
import Cell from '../components/Cell'

export default class Board extends React.Component {
  constructor(){
    super()
    this.rows = 30
    this.cols = 50
    this.speed = 100
    this.state = {
      generation: 0,
      boardState: new Array(this.rows).fill(new Array(this.cols).fill(false))
    }
    this.selectCell = this.selectCell.bind(this);
    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
  }

  selectCell(row, col) {
    let nextBoard = JSON.parse(JSON.stringify(this.state.boardState))
    nextBoard[row][col] = !nextBoard[row][col]
    this.setState({ boardState: nextBoard })
  }

  play() {
    this.interval = setInterval( () => {
      const currentState = this.state.boardState
      let nextBoard = JSON.parse(JSON.stringify(this.state.boardState))
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          let count = 0 // Counting the living neighbors
          if(i > 0 && j > 0){
            if(currentState[i-1][j-1]) count++
          }
          if(i > 0){
            if(currentState[i-1][j]) count++
           }
          if(i > 0 && j < this.cols - 1){
            if(currentState[i-1][j+1]) count++
          }
          if(j > 0){
            if(currentState[i][j-1]) count++
          }
          if(j < this.cols - 1 ){
            if(currentState[i][j+1]) count++
          }
          if(i < this.rows - 1 && j > 0){
            if(currentState[i+1][j-1]) count++
           }
          if(i < this.rows - 1){
            if(currentState[i+1][j]) count++
           }
          if(i < this.rows - 1 && j < this.cols - 1){
            if(currentState[i+1][j+1]) count++
          }
          if(currentState[i][j]){
            if(count < 2 || count > 3) nextBoard[i][j] = false
          }
          if(!currentState[i][j] && count === 3) nextBoard[i][j] = true
        }
      }
      this.setState({ boardState: nextBoard})
    }, this.speed)
  }

  stop(){
    clearInterval(this.interval)
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
            selectCell={this.selectCell}
          />
        )
      }
    }

    return (
      <div>
        <Options
          play={this.play}
          stop={this.stop}
          />
        <div className="center board" style={{width: width}}>
          {boardArr}
        </div>
      </div>
    )
  }
}
