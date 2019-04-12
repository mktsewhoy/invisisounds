import React from 'react'
import Tile from './Tile'
import Button from './Button'
import SoundBoard from './SoundBoard'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const App = () => {
  // return Array.from({ length:1000}, () => <Pixel />)\
  return(
    <div>
       <div>
      <h1>Invisisounds</h1>
      <Router>

      <div>
        <Route exact={true} path='/' component={Button}/>
        <Route exact={true} path='/sound' component={SoundBoard}/>
        
      </div>

      </Router>
    </div>
    </div>
   
    )
  


  
}

export default App
