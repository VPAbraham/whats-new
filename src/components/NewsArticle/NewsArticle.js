import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div className="NewsArticle">
      <img src={props.img} className="NewsArticle-img"  alt="news article header"/>
      <h3 className="NewsArticle-headline">{props.headline}</h3>
      <p className="NewsArticle-description">{props.description}</p>
      <a href={props.link} className="NewsArticle-link">Click for Link</a>
    </div>
  )
}

export default NewsArticle;