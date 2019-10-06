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
    <div onClick={() => changeTopic(topic)}>
      <img src={icons[topic]}/>
      <p>{topic}</p>
    </div>
  )
}

class Menu extends Component{
  constructor(props) {
    super()
  }

  render() {
    console.log(this.props.topics)
    let mappedMenuItems = Object.keys(this.props.topics).map(topic => {
      return <MenuItem topic={topic} changeTopic={this.props.changeTopic}/>
    })
    
    return (
      <nav className="nav">
        {mappedMenuItems}
      </nav>
    )
  }
}

export default Menu;