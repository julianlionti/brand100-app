import { Option } from '../../components/Dropdown/Dropdown'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { useT } from '../../translations'
import * as Yup from 'yup'
import { DateOrEmpty } from '../../components/TimeRange/useTimeRange'

interface CreateEventValues {
  title: string
  description: string
  day: string
  range: {
    start: DateOrEmpty
    end: DateOrEmpty
  }
  eventAlarm: boolean
}

const initialValues: CreateEventValues = {
  title: '',
  description: '',
  day: '',
  range: {
    start: '',
    end: ''
  },
  eventAlarm: true
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  day: Yup.string().required(),
  range: Yup.object().shape({
    end: Yup.date()
      .nullable()
      .default(null)
      .when(
        'start',
        (start, yup) => start && yup.min(start, 'End time cannot be before start time')
      )
  })
})

const useCreateEvent = () => {
  const t = useT()
  const { generalAgenda } = useSelectedEvent()

  const onSubmitEvent = (values: CreateEventValues) => {
    console.log(values)
  }

  const days: Option[] = generalAgenda.map((ag) => ({
    label: `${t('agenda.day')} ${ag.day} - ${ag.date}`,
    value: ag.day.toString()
  }))

  return { t, initialValues, validationSchema, onSubmitEvent, days }
}

export default useCreateEvent
