import React from 'react'
import { shallow } from 'enzyme'
import NewsContainer from './NewsContainer'
import local from '../../data/local'
import technology from '../../data/technology'
import entertainment from '../../data/entertainment'
import science from '../../data/science'
import health from '../../data/health'

describe('NewsContainer', () => {
  let wrapper; 
  let appState;
  beforeEach(() => {
    appState = { local, technology, entertainment, science, health }
    wrapper = shallow(<NewsContainer newsArticles={appState} />)
  })
  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot()
  })
})