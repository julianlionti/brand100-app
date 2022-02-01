import React from 'react'
import { Box, Heading, HStack, ScrollView, VStack } from 'native-base'
import PageContainer from '../../components/PageContainer'
import EventHeader from '../../components/EventHeader/EventHeader'
import useCreateEvent from './useCreateEvent'
import { Formik } from 'formik'
import TextInput from '../../components/TextInput/TextInput'
import Switch from '../../components/Switch/Switch'
import TextArea from '../../components/TextArea/TextArea'
import FormButtons from '../../components/FormButtons/FormButtons'
import Dropdown from '../../components/Dropdown/Dropdown'
import DateTimeInput from '../../components/DateTimeInput/DateTimeInput'
import TimeRange from '../../components/TimeRange/TimeRange'

const CreateEvent = () => {
  const { t, initialValues, onSubmitEvent, days, validationSchema } = useCreateEvent()
  return (
    <PageContainer>
      <EventHeader canGoBack />
      <Heading py={2} mx={2}>
        {t('onetoone.new_event')}
      </Heading>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitEvent}
        validationSchema={validationSchema}
        // validateOnChange={false}
      >
        <ScrollView>
          <VStack p={2} space={2}>
            <TextInput
              id="title"
              title={t('onetoone.event_title')}
              placeholder={t('onetoone.event_title_placeholder')}
            />
            <TextArea
              id="description"
              title={t('onetoone.event_description')}
              placeholder={t('onetoone.event_description_placehoder')}
            />
            <Dropdown id="day" title={t('onetoone.choose_day')} options={days} />
            <TimeRange id="range" />
            <Switch id="eventAlarm" title={t('onetoone.create_calendar_event')} />
            <FormButtons />
          </VStack>
        </ScrollView>
      </Formik>
    </PageContainer>
  )
}

export default CreateEvent
