import React from 'react'
// import Sounds from '../../public/sounds/*.mp3'

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: '400px',
        width: '400px',
        
      }
    }
  }
  mouseOut() {
    console.log("Mouse out!!!");
    this.setState({flipped: false});
    document.getElementById(this.props.soundId).pause()
  }
  
  mouseOver() {
    console.log("Mouse over!!!");
    document.getElementById(this.props.soundId).play()
    this.setState({flipped: true});
  }

  render() {
    console.log(this.state)
    return <div style={this.state.style} onMouseOut={(e) => this.mouseOut(e)} onMouseOver={(e) => this.mouseOver(e)}>
     <audio id={this.props.soundId} ref="audio_tag" src={this.props.soundFile} autoPlay={this.state.flipped}/>
     </div>
    }
}
export default Tile