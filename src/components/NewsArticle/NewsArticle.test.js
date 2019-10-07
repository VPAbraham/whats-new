import React from 'react'
import { shallow } from 'enzyme'
import NewsArticle from './NewsArticle'

describe('NewsArticle', () => {
  let wrapper, articleProps

  beforeEach(() => {
  articleProps = 
  {
  key: 3,
  headline: "Chicken monster eats mayor",
  description: "He got eaten",
  img: "www.Victor.com",
  link: "www.Victor.com"
  }

  wrapper = shallow(<NewsArticle articleProps = {articleProps} />)
  })
  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})