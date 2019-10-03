import React from 'react'
import { shallow } from 'enzyme'
import NewsArticle from './NewsArticle'

describe('NewsArticle', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<div className="NewsArticle">
      <img className="NewsArticle-img" src={props.img} alt="news article header" />
      <h3 className="NewsArticle-headline">{props.headline}</h3>
      <p className="NewsArticle-description">{props.description}</p>
      <a className="NewsArticle-link" href={props.url}>Click for Link</a>
    </div>)

    expect(wrapper).toMatchSnapshot()
  })
})