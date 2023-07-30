import { useEventsState } from '../../reducers/eventsReducer'

export interface SponsorProps {
  a?: never
}

export const useSponsor = (props: SponsorProps) => {
  const { selectedEvent } = useEventsState()
  const { sponsors, hasSponsor } = selectedEvent || {}
  return { ...props, sponsors, hasSponsor }
}
