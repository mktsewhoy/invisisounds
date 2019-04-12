import React from 'react'
import {shallow} from 'enzyme'

import SoundBoard from '../client/components/SoundBoard'

test ('tile exists', () => {
    const expected = '<Tile />'
    const wrapper = shallow(<SoundBoard />)

    
    const actual= wrapper.find('Tile').first()
    expect(actual.text()).toBe(expected)
})

test ('are there 8 tiles', () => {
    const expected = 8
    const wrapper = shallow(<SoundBoard />)


    const actual = wrapper.find('Tile')
    expect(actual.length).toBe(expected)

})