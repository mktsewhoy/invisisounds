import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('Title is correct', () => {
  const expected = 'Invisisounds'
  const wrapper = shallow(<App />)

  const actual = wrapper.find('h1');

  expect(actual.text()).toBe(expected)
})

test('Correct amout of routes', () => {
  const expected = 2 
  const wrapper = shallow(<App />)

  const actual = wrapper.find('Route')

  expect(actual.length).toBe(expected)
})

