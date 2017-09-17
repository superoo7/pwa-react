import React from 'react'
import { shallow } from 'enzyme'
import About from './About'
import toJson from 'enzyme-to-json'


test('About component should render as expected', () => {
  const component = shallow(<About />)
  const tree = toJson(component)
  // console.log(tree)
  expect(tree).toMatchSnapshot()
})

// describe('About component', () => {
//   it('', () => {
//
//   })
// })
