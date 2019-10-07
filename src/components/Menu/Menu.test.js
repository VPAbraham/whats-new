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
  const changeTopicMock = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Menu 
    topics={
      Local,
      Technology,
      Entertainment,
      Science,
      Health
    }
    changeTopic = {changeTopicMock}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})