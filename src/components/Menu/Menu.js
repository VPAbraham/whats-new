import React, { Component } from 'react';
import './Menu.css'
import NewsIcon from './menu-images/newspaper.png'
import TechIcon from './menu-images/data.png'
import EntIcon from './menu-images/video-camera.png'
import SciIcon from './menu-images/laboratory.png'
import HealthIcon from './menu-images/care.png'

const icons = {
  'Local': NewsIcon,
  'Technology': TechIcon,
  'Entertainment': EntIcon,
  'Science': SciIcon,
  'Health': HealthIcon
}

const MenuItem = (props) => {
  const { topic, changeTopic } = props
  return (
    <div className="nav-div" onClick={() => changeTopic(topic)}>
      <img className="icon" src={icons[topic]} alt="search icon"/>
      <p>{topic}</p>
    </div>
  )
}

class Menu extends Component{
  constructor() {
    super()
  }

  render() {
    let mappedMenuItems = Object.keys(this.props.topics).map((topic, index) => {
      return <MenuItem key={index} className="nav-div" topic={topic} changeTopic={this.props.changeTopic}/>
    })
    
    return (
      <nav className="nav">
        {mappedMenuItems}
      </nav>
    )
  }
}

export default Menu;