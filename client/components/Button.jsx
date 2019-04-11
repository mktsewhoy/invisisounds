import React from 'react'
import {Link} from 'react-router-dom'

class Button extends React.Component {
  render(){
      return (
          <div>
              <button>Start Again</button>

              <p>?
                 hi there how are you 
                 <Link to='/sound'>What's up?</Link>
            </p>
             
          </div>
      )
  }
}


export default Button