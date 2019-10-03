import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div>
      <img alt="news article header"/>
      <h3>Article Title</h3>
      <p>Article Desc</p>
      <section>
        <a href="">
          <p>Link To article</p>
        </a>
      </section>
    </div>
  )
}

export default NewsArticle;