import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div>
      <img/>
      <h3>Article Title</h3>
      <p>Article Desc</p>
      <section>
        <a>
          <p>Link To article</p>
        </a>
      </section>
    </div>
  )
}

export default NewsArticle;