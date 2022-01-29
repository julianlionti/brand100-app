import { useCallback, useEffect, useMemo, useState } from 'react'
import { Linking } from 'react-native'
import { setAlreadyShownAds } from '../../actions/eventsActions'
import { useAppDispatch } from '../../hooks/redux'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { useEventsState } from '../../reducers/eventsReducer'
import { useT } from '../../translations'

const useEventHome = () => {
  const t = useT()
  const dispatch = useAppDispatch()
  const { alreadyShownAds } = useEventsState()
  const { color, place, date, name, adveryisments } = useSelectedEvent()
  const [showAd, setShowAdd] = useState(false)

  const selectedAd = useMemo(
    () => adveryisments[Math.floor(Math.random() * adveryisments.length)],
    [adveryisments]
  )

  useEffect(() => {
    if (!alreadyShownAds) {
      setShowAdd(true)
    }
  }, [alreadyShownAds])

  const closeAd = useCallback(() => {
    dispatch(setAlreadyShownAds(true))
    setShowAdd(false)
  }, [dispatch])

  const { link } = selectedAd
  const openAd = useCallback(async () => {
    closeAd()
    const canOpen = await Linking.canOpenURL(link)
    if (canOpen) {
      Linking.openURL(link)
    }
  }, [link, closeAd])

  return {
    t,
    color,
    place,
    date,
    name,
    showAd,
    closeAd,
    openAd,
    ad: { link: selectedAd.link, image: selectedAd.vertical }
  }
}

export default useEventHome
