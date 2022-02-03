import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cleanAllNotifications } from '../../actions/userActions'
import { useUserState } from '../../reducers/userReducer'
import { useT } from '../../translations'

const useNotifications = () => {
  const dispatch = useDispatch()
  const t = useT()
  const [openConfirmationAll, setOpenConfirmationAll] = useState(false)
  const { notifications } = useUserState()

  const toggleConfirmation = () => {
    setOpenConfirmationAll((e) => !e)
  }

  const cleanNotifications = () => {
    dispatch(cleanAllNotifications())
    setOpenConfirmationAll(false)
  }

  return { t, notifications, openConfirmationAll, toggleConfirmation, cleanNotifications }
}

export default useNotifications
