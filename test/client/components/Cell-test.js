import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Cell from '../../../src/views/components/Cell'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const props = {
  selectCell: (row, col) => `${row} and ${col}`
}

const wrapper = shallow(<Cell {...props} />)

describe('Cell', () => {
  it('renders', () => {
    expect(wrapper.length).equal(1)
  })
  context('Methods', () => {
    it('selectCell()', () => {
      expect(typeof wrapper.instance().selectCell).to.equal('function')
      expect(wrapper.instance().props.selectCell(1,4)).to.equal('1 and 4')
    })
  })
})
