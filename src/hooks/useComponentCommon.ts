
import { computed } from 'vue'
import { pick } from 'lodash-es'
import { CommonComponentProps } from '../defaultProps'

const useComponentCommon = (props: Readonly<Partial<CommonComponentProps & { isEditing: boolean }>>, picks: string[]) => {
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    if (!props.isEditing && props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }

  return {
    styleProps,
    handleClick
  }
}

export default useComponentCommon
