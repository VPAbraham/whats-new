import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu'
import Local from '../../data/local'
import Technology from '../../data/technology'
import Entertainment from '../../data/entertainment'
import Science from '../../data/science'
import Health from '../../data/health'

describe('Menu', () => {
  let wrapper
  let mockChangeTopic = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Menu 
    topics={
      Local,
      Technology,
      Entertainment,
      Science,
      Health
    }
    changeTopic = {mockChangeTopic}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})