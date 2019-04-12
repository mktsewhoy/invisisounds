import React from 'react'

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: '400px',
        width: '400px',
        border: 'solid',
      }
    }
  }



  render() {
    console.log(this.state)
    return <div style={this.state.style}></div>
    }
}
export default Tile