

import React from 'react'

class App extends React.Component{

  constructor(props){

    super(props)

    this.userInfo = {

      name : 'John Lee',
      school : 'Aalto University'
    }

    this.contact = <h2> Contact : cheongun.lee@aalto.fi</h2>

  }

  render(){

    return(

      <div>
        <h1>{this.userInfo.name}</h1>
        <h1>{this.userInfo.school}</h1>
        {this.contact}
      </div>
    )
  }
}

export default App


