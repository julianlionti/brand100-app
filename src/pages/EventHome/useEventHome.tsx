import useSelectedEvent from '../../hooks/useSelectedEvent'
import { useT } from '../../translations'

const useEventHome = () => {
  const t = useT()
  const { color, place, date, name } = useSelectedEvent()

  return { t, color, place, date, name }
}

export default useEventHome
