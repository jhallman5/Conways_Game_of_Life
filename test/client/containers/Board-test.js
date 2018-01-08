import 'jsdom-global/register'
import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Board from '../../../src/views/containers/Board'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<Board />)
const component = mount(<Board />)
const speed = 150 //TODO this only works due to hard coded this.speed at 100

describe('Board', () => {
  beforeEach(() => {
    let nextBoard = new Array(30).fill(new Array(50).fill(false))
    component.setState({
      growing: false,
      boardState: nextBoard
    })
  })
  it('renders', () => {
    expect(wrapper.length).equal(1)
  })
  context('Methods', () => {
    it('play()', (done) => {
      expect(component.instance().play).to.a('function')
      expect(component.state().growing).to.be.false
      component.instance().play()
      setTimeout(() => {
        expect(component.state().growing).to.be.true
        done()
      }, speed)
    })
    it('stop()', () => {
      expect(typeof component.instance().stop).to.equal('function')
    })
    context('selectCell()', () => {
      it('has correct data types', () => {
        expect(component.instance().selectCell).to.a('function')
        expect(component.state().boardState).to.be.an('array')
      })
      it('toggles alive', () => {
        expect(component.state().boardState[0][0]).to.be.false
        component.instance().selectCell(0,0)
        expect(component.state().boardState[0][0]).to.be.true
      })
      it('toggles dead', () => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[0][0] = true
        component.setState({ boardState: nextBoard })
        component.instance().selectCell(0,0)
        expect(component.state().boardState[0][0]).to.be.false
      })
    })
  })
  context('Game Logic', () => {
    context('with fewer than two live neighbours dies', () => {
      it('Top Left Corner', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[1][0] = true
        nextBoard[0][0] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[0][0]).to.be.false
          done()
        }, speed)
      })
      it('Bottom Right Corner', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[28][49] = true
        nextBoard[29][49] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[29][49]).to.be.false
          done()
        }, speed)
      })
      it('Center', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[5][4] = true
        nextBoard[5][5] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[5][5]).to.be.false
          done()
        }, speed)
      })
    })
    context('with two live neighbours lives', () => {
      it('Top Left Corner', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[1][0] = true
        nextBoard[0][1] = true
        nextBoard[0][0] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[0][0]).to.be.true
          done()
        }, speed)
      })
      it('Bottom Right Corner', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[28][49] = true
        nextBoard[29][48] = true
        nextBoard[29][49] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[29][49]).to.be.true
          done()
        }, speed)
      })
      it('Center', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[5][4] = true
        nextBoard[4][5] = true
        nextBoard[5][5] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[5][5]).to.be.true
          done()
        }, speed)
      })
    })
    context('with three live neighbours lives', () => {
      it('Top Left Corner', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[1][0] = true
        nextBoard[0][1] = true
        nextBoard[1][1] = true
        nextBoard[0][0] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[0][0]).to.be.true
          done()
        }, speed)
      })
      it('Bottom Right Corner', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[28][49] = true
        nextBoard[29][48] = true
        nextBoard[28][48] = true
        nextBoard[29][49] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[29][49]).to.be.true
          done()
        }, speed)
      })
      it('Center', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[5][4] = true
        nextBoard[4][5] = true
        nextBoard[4][4] = true
        nextBoard[5][5] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[5][5]).to.be.true
          done()
        }, speed)
      })
    })
    context('with more than three live neighbours dies', () => {
      it('Top', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[0][18] = true
        nextBoard[1][18] = true
        nextBoard[1][19] = true
        nextBoard[1][20] = true
        nextBoard[0][19] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[0][19]).to.be.false
          done()
        }, speed)
      })
      it('Bottom', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[29][44] = true
        nextBoard[28][44] = true
        nextBoard[28][45] = true
        nextBoard[28][46] = true
        nextBoard[29][45] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[29][45]).to.be.false
          done()
        }, speed)
      })
      it('Left', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[0][4] = true
        nextBoard[1][2] = true
        nextBoard[1][3] = true
        nextBoard[1][4] = true
        nextBoard[0][3] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[0][3]).to.be.false
          done()
        }, speed)
      })
      it('right', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[4][48] = true
        nextBoard[3][48] = true
        nextBoard[4][48] = true
        nextBoard[5][48] = true
        nextBoard[4][49] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[2][2]).to.be.false
          done()
        }, speed)
      })
      it('Center', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[5][4] = true
        nextBoard[4][5] = true
        nextBoard[4][4] = true
        nextBoard[5][6] = true
        nextBoard[5][5] = true
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[5][5]).to.be.false
          done()
        }, speed)
      })
    })
    context('with three live neighbours becomes alive', () => {
      it('Top Left Corner', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[1][0] = true
        nextBoard[0][1] = true
        nextBoard[1][1] = true
        nextBoard[0][0] = false
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[0][0]).to.be.true
          done()
        }, speed)
      })
      it('Bottom Right Corner', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[28][49] = true
        nextBoard[29][48] = true
        nextBoard[28][48] = true
        nextBoard[29][49] = false
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[29][49]).to.be.true
          done()
        }, speed)
      })
      it('Center', (done) => {
        let nextBoard = JSON.parse(JSON.stringify(component.state().boardState))
        nextBoard[5][4] = true
        nextBoard[4][5] = true
        nextBoard[4][4] = true
        nextBoard[5][5] = false
        component.setState({ boardState: nextBoard })
        setTimeout(() => {
          expect(component.state().boardState[5][5]).to.be.true
          done()
        }, speed)
      })
    })
  })
})
