import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
// import NewsArticle from '../NewsArticle/NewsArticle'
import NewsContainer from '../NewsContainer/NewsContainer'


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
        YOUR CODE GOES HERE!
      </div>
    );
  }
}

export default App;
