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

  it('should be able to handle new text values', () => {
    const mockEvent = {target: { value: 'hello'}}
    wrapper.instance().handleChange = jest.fn()
    expect(wrapper.state('search')).toEqual('')
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('search')).toEqual('hello')

  })


})