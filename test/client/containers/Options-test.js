import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Options from '../../../src/views/containers/Options'

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const props = {
  play: () => 'Game starts',
  stop: () => 'Game ends',
  generations: 17
}

const wrapper = shallow(<Options {...props} />)

describe('Options', () => {
  it('renders', () => {
    expect(wrapper.length).equal(1)
  })
  context('Methods', () => {
    it('Play calls the play prop function', () => {
      expect(typeof wrapper.instance().play).to.equal('function')
      expect(wrapper.instance().props.play() ).to.equal('Game starts')
    })
    it('Stop calls the stop prop function', () => {
      expect(typeof wrapper.instance().props.play).to.equal('function')
      expect(wrapper.instance().props.stop()).to.equal('Game ends')
    })
  })
  context('Displays Props', () => {
    it('Displays Generations', () => {
      expect(wrapper.find('.generations').length).equal(1)
      expect(wrapper.instance().props.generations).to.equal(17)

    })
  })
})
