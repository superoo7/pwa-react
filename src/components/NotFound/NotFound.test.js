import React from 'react'
import { shallow } from 'enzyme'
import NotFound from './NotFound'
import toJson from 'enzyme-to-json'


test('NotFound component should render as expected', () => {
  const component = shallow(<NotFound />)
  const tree = toJson(component)
  // console.log(tree)
  expect(tree).toMatchSnapshot()
})
