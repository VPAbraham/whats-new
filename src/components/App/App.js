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
      local,
      technology,
      entertainment,
      science,
      health
    }
  }

  render () {
    return (
      <div className="app">
        <SearchForm />
        <main>
          <Menu />
          <NewsContainer newsArticles={this.state}/>
        </main>
      </div>
    );
  }
}

export default App;
