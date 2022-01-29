import { useContrastText, useTheme } from 'native-base'
import { ITab } from '../../components/PageWithTabs/PageWithTabs'
import useSelectedEvent from '../../hooks/useSelectedEvent'

const useMaps = () => {
  const { maps, color } = useSelectedEvent()
  const { colors } = useTheme()

  const tabBackgroundColor = colors.gray[800]
  const constrantTextColor = useContrastText(tabBackgroundColor)

  const tabIndicatorColor = color

  const tabs = maps.map((m): ITab<typeof m> => ({ data: m, id: m.id.toString(), title: m.name }))

  return { tabs, tabBackgroundColor, tabIndicatorColor, constrantTextColor }
}

export default useMaps
