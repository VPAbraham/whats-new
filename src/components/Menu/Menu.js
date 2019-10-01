import React, { Component } from 'react';
import './Menu.css'
import NewsIcon from './menu-images/newspaper.png'
import TechIcon from './menu-images/data.png'
import EntIcon from './menu-images/video-camera.png'
import SciIcon from './menu-images/laboratory.png'
import HealthIcon from './menu-images/care.png'


class Menu extends Component{
  constructor() {
    super()
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav--local nav-div">
          <img src={NewsIcon} className="icon"></img>
          <p>Local News</p>
        </div>
        <div className="nav--technology nav-div">
          <img src={TechIcon} className="icon"></img>
          <p>Technology</p>
        </div>
        <div className="nav--entertainment nav-div">
          <img src={EntIcon} className="icon"></img>
          <p>Entertainment</p>
        </div>
        <div className="nav--science nav-div">
          <img src={SciIcon} className="icon"></img>
          <p>Science</p>
        </div>
        <div className="nav--health nav-div">
          <img src={HealthIcon} className="icon"></img>
          <p>Health</p>
        </div>
      </nav>
    )
  }
}

export default Menu;