import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  return (
    <section className="NewsContainer">  
      {props.newsArticles.map(newsArticle => {
        return <NewsArticle
        key={newsArticle.id} 
        headline={newsArticle.headline} 
        description={newsArticle.description} 
        img={newsArticle.img} 
        link={newsArticle.url} 
        />
        })
      }
    </section>

  )
}

export default NewsContainer;