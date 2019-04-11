import React from 'react'
import Tile from './Tile'
import Button from './Button'
import SoundBoard from './SoundBoard'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Invisisounds test</h1>

      <Router>

        <div>
          <Route exact={true} path='/' component={Button}/>
          <Route exact={true} path='/sound' component={SoundBoard}/>
          
        </div>

      </Router>
      
    </div>    


  )
}

export default App
