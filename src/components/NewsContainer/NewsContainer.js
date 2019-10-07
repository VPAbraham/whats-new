import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  let articles = props.newsArticles.map(newsArticle => {
    return <NewsArticle
    key={newsArticle.id} 
    headline={newsArticle.headline} 
    description={newsArticle.description} 
    img={newsArticle.img} 
    link={newsArticle.url} 
    />
    })
    
  return (
    <section className="NewsContainer">  
      {articles}
    </section>

  )
}

export default NewsContainer;