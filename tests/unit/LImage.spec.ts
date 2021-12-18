import { shallowMount } from '@vue/test-utils'
import LImage from '../../src/components/LImage'
import { imageDefaultProps } from '../../src/defaultProps'

describe('LImage.vue', () => {
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
    const src = 'imgurl'
    const props = {
      ...imageDefaultProps,
      imageSrc: src,
      height: '100px'
    }
    const wrapper = shallowMount(LImage, { props })
    expect(wrapper.element.tagName).toBe('IMG')
    const style = wrapper.attributes().style
    expect(style.includes('height')).toBeTruthy()
    expect(style.includes('actionType')).toBeFalsy()
    expect(wrapper.attributes().src).toBe(src)
  })
  it('组件包含链接时，需要点击跳转', async () => {
    const props = {
      ...imageDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url'
    }
    const wrapper = shallowMount(LImage, { props })
    await wrapper.trigger('click')
    expect(window.location.href).toBe('http://dummy.url')
  })
  it('组件包含链接且为编辑状态时，不需要点击跳转', async () => {
    const props = {
      ...imageDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      isEditing: true
    }
    const wrapper = shallowMount(LImage, { props })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe('http://dummy.url')
  })
})
