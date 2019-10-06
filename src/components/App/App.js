import React, { Component } from 'react'
import './App.css'
import NewsContainer from '../NewsContainer/NewsContainer'
import SearchForm from '../SearchForm/SearchForm'
import Menu from '../Menu/Menu'
import Local from '../../data/local'
import Technology from '../../data/technology'
import Entertainment from '../../data/entertainment'
import Science from '../../data/science'
import Health from '../../data/health'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTopic: 'Local',
      topics: {
        Local,
        Technology,
        Entertainment,
        Science,
        Health
      }
    }
  }

  changeTopic = (topic) => {
    this.setState({currentTopic: topic})
  }

  filterArticles = (search) => {
    const searchSubject = search.toUpperCase()
    this.setState({
      currentTopic: this.state.currentTopic.filter(article => 
        article.headline.toUpperCase().includes(search) ||
        article.description.toUpperCase().includes(search) )
    })
  }

  render () {
    const { topics, currentTopic } = this.state
    return (
      <div className="app">
        <SearchForm filterArticles={this.filterArticles}/>
        <main>
          <Menu topics={topics} changeTopic={this.changeTopic}/>
          <NewsContainer newsArticles={topics[currentTopic]}/>
        </main>
      </div>
    );
  }
}


export default App;
