import React from 'react'

const width = .5
const height = width

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: '#ff0000'
      }
    }
  }
  hoverOn = evt => {
    this.setState({
      hover: !this.state.hover,
      style: {
        height: '50px',
        width: '50px',
        // ? normal red state: hover green state
        backgroundColor: this.state.hover ? '#ff0000' : '#00ff00'
      }
      // also play sound on hover
    })
    document.getElementById('tileover').play()
  }
  render() {
    return (
      <div style={this.state.style} onMouseOver={this.hoverOn} onMouseLeave={this.hoverOn}></div>
    )
  }
}
export default Tile