import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Board from '../../../src/views/containers/Board'

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const props = {
  play: () => 'Game starts',
  stop: () => 'Game ends'
}

const wrapper = shallow(<Board {...props} />)

describe('Options', () => {
  it('renders', () => {
    expect(wrapper.length).equal(1)
  })
  context('Methods', () => {

  })
})
