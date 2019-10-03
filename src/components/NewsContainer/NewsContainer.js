import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  console.log(props)
  return (
    <section>  
    {props.newsArticles.local.map(newsArticle => {
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