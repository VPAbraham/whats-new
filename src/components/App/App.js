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
      },
      searchedArticles: Local
    }
  }

  changeTopic = (topic) => {
    this.setState({
      currentTopic: topic,
      searchedArticles: this.state.topics[topic]
    })
  }

  filterArticles = (search) => {
    const searchSubject = search.toUpperCase()
    console.log(this.state.topics[this.state.currentTopic])
    this.setState({
      searchedArticles: this.state.topics[this.state.currentTopic].filter(article => 
        article.headline.toUpperCase().includes(searchSubject) ||
        article.description.toUpperCase().includes(searchSubject) )
    })

  }

  render () {
    const { topics, currentTopic } = this.state
    return (
      <div className="app">
        <SearchForm filterArticles={this.filterArticles}/>
        <main>
          <Menu topics={topics} changeTopic={this.changeTopic}/>
          <NewsContainer newsArticles={this.state.searchedArticles} topics={topics}/>
        </main>
      </div>
    );
  }
}


export default App;
