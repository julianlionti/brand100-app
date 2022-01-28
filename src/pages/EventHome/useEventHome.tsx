import useSelectedEvent from '../../hooks/useSelectedEvent'
import { useEventsState } from '../../reducers/eventsReducer'

const useEventHome = () => {
  const selectedEvent = useSelectedEvent()
  const images = selectedEvent.images

  return { selectedEvent, images }
}

export default useEventHome
