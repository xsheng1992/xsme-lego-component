import { shallowMount } from '@vue/test-utils'
import LText from '../../src/components/LText'
import { textDefaultProps } from '../../src/defaultProps'

describe('LText.vue', () => {
  const { location } = window

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: '' }
    })
  })
  afterEach(() => {
    window.location = location
  })

  it('默认组件渲染', () => {
    const message = 'test'
    const props = {
      ...textDefaultProps,
      text: message
    }
    const wrapper = shallowMount(LText, { props })
    expect(wrapper.text()).toBe(message)
    expect(wrapper.element.tagName).toBe('DIV')
    const style = wrapper.attributes().style
    expect(style.includes('font-size')).toBeTruthy()
    expect(style.includes('actionType')).toBeFalsy()
  })
  it('组件包含链接时，需要点击跳转', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      tag: 'h2'
    }
    const wrapper = shallowMount(LText, { props })
    expect(wrapper.element.tagName).toBe('H2')
    await wrapper.trigger('click')
    expect(window.location.href).toBe('http://dummy.url')
  })
  it('组件包含链接且为编辑状态时，不需要点击跳转', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      tag: 'h2',
      isEditing: true
    }
    const wrapper = shallowMount(LText, { props })
    expect(wrapper.element.tagName).toBe('H2')
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe('http://dummy.url')
  })
})
