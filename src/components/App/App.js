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
      local
    }
  }

  render () {
    return (
      <div className="app">
        <SearchForm />
      </div>
    );
  }
}

export default App;
