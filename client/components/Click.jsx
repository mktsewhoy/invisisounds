import React from 'react'

class clickThis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //default state of tile
      }
    }
  }

  clickHandler = evt => {
    // console.log('clicked into')
    this.setState({
        //change to new tile state
    })
  }

  render() {
    return (
      <div style={this.state.placeholder} onMouseEnter={this.clickHandler}></div>
    )
  }
}