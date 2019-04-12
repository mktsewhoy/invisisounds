import React from 'react'
import {shallow} from 'enzyme'

import Tile from '../client/components/Tile'

test ('does it exist', () => {
    const expected = 1
    const wrapper = shallow(<Tile />)

    const actual = wrapper.find('div')
    expect(actual.length).toBe(expected)
})
