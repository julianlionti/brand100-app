import { useField } from 'formik'
import { useCallback, useState } from 'react'
import { DateTimeInputProps } from './DateTimeInput'

const useDateTimeInput = (props: DateTimeInputProps) => {
  const { id } = props
  const [{ value }, { touched, error }, { setValue }] = useField<Date | ''>(id)
  const [openPicker, setOpenPicker] = useState(false)

  const setShowPicker = useCallback((next: boolean) => {
    setOpenPicker(next)
  }, [])

  const onChangeDate = useCallback(
    (newDate: Date | '') => {
      setValue(newDate)
      setOpenPicker(false)
    },
    [setValue]
  )

  return {
    ...props,
    touched,
    error,
    setShowPicker,
    openPicker,
    value,
    onChangeDate
  }
}

export default useDateTimeInput
