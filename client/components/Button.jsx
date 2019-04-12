import React from 'react'
import {Link} from 'react-router-dom'

class Button extends React.Component {
  render(){
      return (
          <div>
          <p>
            <Link to='/sound'><button>Start Again</button></Link>
          </p>
          </div>
      )
  }
}


export default Button