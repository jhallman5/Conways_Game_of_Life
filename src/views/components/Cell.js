import React from 'react'

class Cell extends React.Component {
  constructor(props) {
     super(props)
     this.selectCell = this.selectCell.bind(this)
  }

	selectCell(){
		this.props.selectCell(this.props.row, this.props.col)
	}

  render(){
    return (
      <div
        className={this.props.status}
        id={this.props.id}
        onClick={this.selectCell}
      />
    )
  }
}

export default Cell
