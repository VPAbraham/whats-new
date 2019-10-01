import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component{
  constructor() {
    super()
  }

  render() {
    return (
      <nav>
        <div className="nav--local">
          <img></img>
          <p>Local News</p>
        </div>
        <div className="nav--technology">
          <img></img>
          <p>Technology</p>
        </div>
        <div className="nav--entertainment">
          <img></img>
          <p>Entertainment</p>
        </div>
        <div className="nav--science">
          <img></img>
          <p>Science</p>
        </div>
        <div className="nav--health">
          <img></img>
          <p>Health</p>
        </div>
      </nav>
    )
  }
}

export default Menu;