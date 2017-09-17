import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import toJson from 'enzyme-to-json'


test('Header component should render as expected', () => {
  const component = shallow(<Header />)
  const tree = toJson(component)
  // console.log(tree)
  expect(tree).toMatchSnapshot()
})
