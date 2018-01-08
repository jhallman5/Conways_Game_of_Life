import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Instructions from '../../../src/views/components/Instructions'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<Instructions />)

describe('Instructions', () => {
  it('renders', () => {
    expect(wrapper.length).equal(1)
  })
})
