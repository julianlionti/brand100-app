import { useContrastText, useTheme } from 'native-base'
import useSelectedEvent from '../../hooks/useSelectedEvent'

const useMaps = () => {
  const { maps, color } = useSelectedEvent()
  const { colors } = useTheme()

  const tabBackgroundColor = colors.gray[800]
  const constrantTextColor = useContrastText(tabBackgroundColor)

  const tabIndicatorColor = color
  return { maps, tabBackgroundColor, tabIndicatorColor, constrantTextColor }
}

export default useMaps
