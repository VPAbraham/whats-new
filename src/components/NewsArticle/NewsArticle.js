import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div className="NewsArticle">
      <img className="NewsArticle-img" src={props.img} alt="news article header"/>
      <h3 className="NewsArticle-headline">{props.headline}</h3>
      <p className="NewsArticle-description">{props.description}</p>
      <a className="NewsArticle-link"href={props.url}>Click for Link</a>
    </div>
  )
}

export default NewsArticle;