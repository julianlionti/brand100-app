import { useCallback, useEffect, useMemo, useState } from 'react'
import { Linking } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { checkForUpdates, setAlreadyShownAds } from '../../actions/eventsActions'
import { useAppDispatch } from '../../hooks/redux'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { useEventsState } from '../../reducers/eventsReducer'
import { useT } from '../../translations'

const useEventHome = () => {
  const t = useT()
  const dispatch = useAppDispatch()
  const { alreadyShownAds } = useEventsState()
  const { color, place, date, name, adveryisments } = useSelectedEvent()
  const [showAd, setShowAdd] = useState(true)

  const selectedAd = useMemo(
    () => adveryisments[Math.floor(Math.random() * adveryisments.length)],
    [adveryisments]
  )

  useEffect(() => {
    if (alreadyShownAds) {
      setShowAdd(false)
    }
  }, [alreadyShownAds])

  const closeAd = useCallback(() => {
    dispatch(setAlreadyShownAds(true))
    setShowAdd(false)
  }, [dispatch])

  const { link } = selectedAd || {}
  const openAd = useCallback(async () => {
    if (link) {
      const canOpen = await Linking.canOpenURL(link)
      if (canOpen) {
        Linking.openURL(link)
      }
    }
  }, [link])

  useEffect(() => {
    dispatch(checkForUpdates())
  }, [dispatch, color])

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return {
    t,
    color,
    place,
    date,
    name,
    showAd,
    closeAd,
    openAd,
    ad: selectedAd ? { link: selectedAd.link, image: selectedAd.vertical } : undefined
  }
}

export default useEventHome
