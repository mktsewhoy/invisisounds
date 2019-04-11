import React from 'react'
import Tile from './Tile'
const App = () => {
  return (
    Array.from({ length: 50000 }, () => <Tile />)


  )
}

export default App
