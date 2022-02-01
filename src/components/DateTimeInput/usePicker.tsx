import moment from 'moment'
import { useCallback, useMemo, useState } from 'react'
import { useT } from '../../translations'
import { PickerProps } from './Picker'

const usePicker = (props: PickerProps) => {
  const { onChange } = props
  const t = useT()
  const [hour, setHour] = useState<number | null>(null)

  const options = useMemo(() => {
    return Array(!hour ? 24 : 12)
      .fill(null)
      .map((e, i) => {
        if (!hour) {
          if (i < 6) return null
          return { value: i, title: `${i < 10 ? '0' : ''}${i}` }
        }

        return { value: i * 5, title: `${i * 5 < 10 ? '0' : ''}${i * 5}` }
      })
      .filter((e) => e)
  }, [hour])

  const isHours = !hour
  const title = isHours ? t('onetoone.hours') : t('onetoone.minutes')

  const selectItem = useCallback(
    (val: number) => {
      if (!hour) {
        setHour(val)
      } else {
        const finalDate = moment().set('hour', hour).set('minute', val).toDate()
        onChange(finalDate)
        setHour(null)
      }
    },
    [hour, onChange]
  )

  return { options, isHours, title, selectItem }
}

export default usePicker
