import React from 'react'
import Tile from './Tile'
import Sound from '../../public/sounds.js'

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

class SoundBoard extends React.Component {
  
   
  render(){
    console.log(shuffle(Sound))
    
    return (
        <div>
            {shuffle(Sound).map((item, id)=> {
              return (
                <Tile soundID={item.id} soundFile={item.file}/>
                // <div key={id}>{item.file}</div>
              )
            })}
    
        </div>
    )
  }
} 


export default SoundBoard