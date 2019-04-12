import React from 'react'
import Sound from '../../public/sounds.js'
import Tile from './Tile'

function shuffle(myArray) {
  console.log(myArray)
  return myArray.sort(() => Math.random() - 0.5);
}

class SoundBoard extends React.Component {
  
   
  render(){
    console.log(shuffle(Sound))
    
    // return(
    // <Tile soundId="sou1" soundFile="/sounds/Air Plane Ding-SoundBible.com-496729130.mp3" />)
        return (
        <div>
            {shuffle(Sound).map((item, id)=> {
              console.log(item)
              return (
                <Tile soundID={"s" + item.id} soundFile={'/sounds/' + item.url}/>
                
              )
            })}
    
        </div>
    )
  }
} 


export default SoundBoard