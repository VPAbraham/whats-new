import React from 'react'
import { shallow } from 'enzyme'
import SearchForm from './SearchForm'

describe('SearchForm', () => {
  let wrapper
  const mockFilterArticles = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<SearchForm filterArticles = {mockFilterArticles}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


})