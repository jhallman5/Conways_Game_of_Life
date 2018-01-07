import React from 'react'

export default class Instructions extends React.Component {
  render(){
    return(
      <div>
        <h1>Rules of the Game</h1>
        <h3>Any live cell with fewer than two live neighbours dies, as if caused by underpopulation</h3><br />
        <h3>Any live cell with two or three live neighbours lives on to the next generation.</h3><br />
        <h3>Any live cell with more than three live neighbours dies, as if by overpopulation.</h3><br />
        <h3>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</h3><br />
        <h1>How to Play</h1><br />
        <h3>Click any cell to toggle it's livelihood</h3><br />
        <h3>Click play and watch life unfold before your eyes</h3><br />
      </div>
    )
  }
}
