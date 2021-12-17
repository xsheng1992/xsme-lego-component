<template>
  <img
    :style="styleProps"
    class="l-image-component"
    @click.prevent="handleClick"
    :src="imageSrc"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useComponentCommon from '../../hooks/useComponentCommon'
import { transformToComponentProps, imageDefaultProps, imageStylePropsNames } from '../../defaultProps'

const defaultProps = transformToComponentProps(imageDefaultProps)

export default defineComponent({
  name: 'LImage',
  props: {
    ...defaultProps
  },
  setup (props) {
    const { styleProps, handleClick } = useComponentCommon(props, imageStylePropsNames)

    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<style lang="stylus" scoped>
.l-image-component
  max-width 100%
  position relative !important
</style>
