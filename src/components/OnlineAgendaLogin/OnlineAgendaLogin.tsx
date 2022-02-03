import React from 'react'
import { Button, Center, Heading, IconButton, ScrollView, Text } from 'native-base'
import PageContainer from '../PageContainer'
import { Formik } from 'formik'
import useOnlineAgendaTab from './useOnlineAgendaLogin'
import TextInput from '../TextInput/TextInput'
import { t } from 'i18next'
import { eventHeaderHeight } from '../../themes/darkTheme'
import MaterialIcon from '../MaterialIcon'

const OnlineAgendaLogin = () => {
  const { t, initialState, onLoginSubmit } = useOnlineAgendaTab()
  return (
    <PageContainer>
      <Formik initialValues={initialState} onSubmit={onLoginSubmit}>
        {({ submitForm }) => (
          <Center flex={1} mt={-eventHeaderHeight} p={2}>
            <Heading mb={10} mt={-10} textAlign={'center'}>
              {t('onetoone.login_title')}
            </Heading>
            <TextInput title={t('onetoone.username')} id="username" />
            <TextInput title={t('onetoone.password')} id="password" type="password" secure />
            <Button onPress={submitForm} mt={5}>
              {t('onetoone.login')}
            </Button>
          </Center>
        )}
      </Formik>
    </PageContainer>
  )
}

export default OnlineAgendaLogin
