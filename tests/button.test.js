import React from 'react'
import {shallow} from 'enzyme'

import Button from '../client/components/button'

test('button says start', () => {
    const expected = 'Start'
    const wrapper = shallow(<Button />)

    const actual = wrapper.find('button')
    expect(actual.text()).toBe(expected)
})

test('button exists', () => {
    const expected = 1
    const wrapper = shallow(<Button />)

    const actual = wrapper.find('button')
    expect(actual.length).toBe(expected)
})