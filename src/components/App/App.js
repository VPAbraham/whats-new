import React, { Component } from 'react'
import './App.css'
import NewsContainer from '../NewsContainer/NewsContainer'
import SearchForm from '../SearchForm/SearchForm'
import Menu from '../Menu/Menu'
import local from '../../data/local'
import technology from '../../data/technology'
import entertainment from '../../data/entertainment'
import science from '../../data/science'
import health from '../../data/health'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTopic: 'local',
      topics: {
        local,
        technology,
        entertainment,
        science,
        health
      }
    }
  }

  changeTopic = (topic) => {
    this.setState({currentTopic: topic})
  }

  render () {
    const { topics, currentTopic } = this.state
    return (
      <div className="app">
        <SearchForm />
        <main>
          <Menu topics={topics} changeTopic={this.changeTopic}/>
          <NewsContainer newsArticles={topics[currentTopic]}/>
        </main>
      </div>
    );
  }
}


export default App;
