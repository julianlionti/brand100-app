import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { checkForUpdates, setAlreadyShownAds } from '../../actions/eventsActions'
import { useAppDispatch } from '../../hooks/redux'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { useEventsState } from '../../reducers/eventsReducer'
import { useT } from '../../translations'

const useEventHome = () => {
  const t = useT()
  const { navigate, addListener } = useNavigation()
  const dispatch = useAppDispatch()
  const { alreadyShownAds } = useEventsState()
  const { color, place, date, name, information, adveryisments } = useSelectedEvent()

  const [focus, setFocus] = useState(true)

  useEffect(() => {
    const selectedAd = adveryisments[Math.floor(Math.random() * adveryisments.length)]
    if (!alreadyShownAds && selectedAd && focus) {
      setTimeout(() => {
        navigate('AdModal' as never, selectedAd as never)
      }, 1500)
    }
  }, [alreadyShownAds, navigate, adveryisments, focus])

  useEffect(() => {
    dispatch(checkForUpdates())
  }, [dispatch, color])

  useEffect(() => {
    const unsubscribeFocus = addListener('focus', () => {
      setFocus(true)
    })

    const unsubscribeBlur = addListener('blur', () => {
      dispatch(setAlreadyShownAds(false))
      setFocus(false)
    })
    return () => {
      unsubscribeBlur()
      unsubscribeFocus()
    }
  }, [addListener, setFocus, dispatch])

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return {
    t,
    color,
    place,
    date,
    name,
    information
  }
}

export default useEventHome
