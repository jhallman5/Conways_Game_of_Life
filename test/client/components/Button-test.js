import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Button from '../../../src/views/components/Button'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const props = {
  type: 'test',
  description: 'hyperdrive'
}

const wrapper = shallow(<Button {...props} />)

describe('Button', () => {
  it('renders', () => {
    expect(wrapper.length).equal(1)
  })
  it('displays props', () => {
    expect(wrapper.text()).to.equal('hyperdrive');
  })
})
