import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsArticle from '../NewsArticle/NewsArticle'
import NewsContainer from '../NewsContainer/NewsContainer'
import SearchForm from '../SearchForm/SearchForm'
import Menu from "../Menu/Menu"

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      // localNews,
      // technology,
      // entertainment,
      // science,
      // health
    }
  }

  changeArticles

  render () {
    return (
      <div className="app">
        <SearchForm />
        <Menu />
      </div>
    );
  }
}

export default App;
