// import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { add } from '..'

configure({ adapter: new Adapter() })

describe('add', () => {
  it('adds 2 and 2 correctly', () => {
    expect(add(2, 2)).toBe(4)
  })
})
