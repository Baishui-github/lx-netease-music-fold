import { useWindowSize } from '@/utils/hooks'
import { isHorizontalMode } from '../tools'

export default () => {
  const windowSize = useWindowSize()

  return windowSize.width >= 520 || isHorizontalMode(windowSize.width, windowSize.height)
}
