import { shallowMount } from '@vue/test-utils'
import LShape from '../../src/components/LShape'
import { shapeDefaultProps } from '../../src/defaultProps'
import rgbHex from 'rgb-hex'

describe('LShape.vue', () => {
  it('默认组件渲染', () => {
    const props = {
      ...shapeDefaultProps,
      backgroundColor: '#ffffff'
    }
    const wrapper = shallowMount(LShape, { props })
    expect(wrapper.element.tagName).toBe('DIV')
    const style = wrapper.attributes().style
    expect(style.includes('background-color')).toBeTruthy()
    expect(style.includes('actionType')).toBeFalsy()
    const element = wrapper.element as HTMLElement
    const color = '#' + rgbHex(element.style.backgroundColor)
    expect(color).toBe('#ffffff')
  })
})
