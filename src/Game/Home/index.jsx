import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  state={
    gameList:[
      {
        name:'五子棋',
        address:'/chess'
      },
    ]
  }
  render() {
    return (
      <div>
        
        <ul>
          {
            this.state.gameList.map(item=>
              <li key={item.name}><Link to={item.address}>{item.name}</Link></li>  
            )
          }
        </ul>
      </div>
    )
  }
}
