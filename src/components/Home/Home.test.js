import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'
import Post from '../Post/Post'
import toJson from 'enzyme-to-json'


test('Home component should render as expected', () => {
  const posts = [{
    "title": "My experience with EE 1",
    "slug": "my-experience-with-ee-1",
    "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "content": "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor"
  }]
  const component = shallow(<Home posts={posts} />)
  const tree = toJson(component)
  // console.log(tree)
  expect(component.find(Post).length).toBe(1)
  expect(tree).toMatchSnapshot()
})


test('Home component should render as expected', () => {
  const posts = [{
    "title": "My experience with EE 1",
    "slug": "my-experience-with-ee-1",
    "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "content": "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor"
  },
  {
    "title": "My experience with EE 1",
    "slug": "my-experience-with-ee-1",
    "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "content": "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor"
  }]
  const component = shallow(<Home posts={posts} />)
  const tree = toJson(component)
  // console.log(tree)
  expect(component.find(Post).length).toBe(2)
  expect(tree).toMatchSnapshot()
})

test('Home component should render as expected', () => {
  const posts = []
  const component = shallow(<Home posts={posts} />)
  const tree = toJson(component)
  // console.log(tree)
  expect(component.find(Post).length).toBe(0)
  expect(tree).toMatchSnapshot()
})
