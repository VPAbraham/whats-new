import React from 'react'
import { shallow } from 'enzyme'
import NewsContainer from './NewsContainer'
import Local from '../../data/local'
import Technology from '../../data/technology'
import Entertainment from '../../data/entertainment'
import Science from '../../data/science'
import Health from '../../data/health'

describe('NewsContainer', () => {
  let wrapper; 
  let appState;
  beforeEach(() => {
    appState = { Local, Technology, Entertainment, Science, Health }
    wrapper = shallow(<NewsContainer newsArticles={appState.Local} topics={appState} />)
  })
  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot()
  })
})w