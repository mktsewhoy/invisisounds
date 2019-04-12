import React from 'react'
import Tile from './Tile'

class SoundBoard extends React.Component {
  render(){
    console.log(Tile)
    return (
        <div>
            <Tile soundId='sound1' soundFile='/sounds/Air Plane Ding-SoundBible.com-496729130.mp3' />
            <Tile  soundId='sound2' soundFile='/sounds/Banana Peel Slip Zip-SoundBible.com-803276918.mp3'/>
            <Tile  soundId='sound3' soundFile='/sounds/cartoon-computer_ds.mp3'/>
            <Tile  soundId='sound4' soundFile='/sounds/dixie-horn_daniel-simion.mp3'/>
            <Tile  soundId='sound5' soundFile='/sounds/Japanese Temple Bell Small-SoundBible.com-113624364.mp3'/>
            <Tile  soundId='sound6' soundFile='/sounds/Strange_Static-KP-1708174947.mp3'/>
            <Tile  soundId='sound7' soundFile='/sounds/Tape Deck-SoundBible.com-967485391.mp3'/>
            <Tile  soundId='sound8' soundFile='sounds/Joke Sting-SoundBible.com-1968971319.mp3'/>
    
        </div>
    )
  }
} 


export default SoundBoard