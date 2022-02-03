import { FormikValues } from 'formik'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/userActions'
import { useT } from '../../translations'

export interface LoginState {
  username: string
  password: string
}

const initialState: LoginState = {
  username: '',
  password: ''
}

const useOnlineAgendaLogin = () => {
  const t = useT()
  const dispatch = useDispatch()

  const onLoginSubmit = (values: LoginState) => {
    dispatch(login(values))
  }

  return { t, initialState, onLoginSubmit }
}

export default useOnlineAgendaLogin
