import React, { Component } from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle'

class NewsContainer extends Component{
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="news-container">
        <NewsArticle />
      </div>
    )
  }
}

// NEWSCONTAINER COMPONENT CODE GOES HERE

export default NewsContainer;