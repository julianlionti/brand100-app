import { useContrastText, useTheme } from 'native-base'
import useSelectedEvent from '../../hooks/useSelectedEvent'

const usePageWithTabs = () => {
  const { color } = useSelectedEvent()
  const { colors } = useTheme()

  const tabBackgroundColor = colors.gray[800]
  const constrantTextColor = useContrastText(tabBackgroundColor)

  const tabIndicatorColor = color
  return { tabBackgroundColor, tabIndicatorColor, constrantTextColor }
}

export default usePageWithTabs
