import React, { memo } from 'react'
import { FormControl, Input, View } from 'native-base'
import useDateTimeInput from './useDateTimeInput'
import { StringMap, TOptions } from 'i18next'
import { TouchableOpacity } from 'react-native'
import moment from 'moment'
import Picker from './Picker'

export interface DateTimeInputProps {
  id: string
  title?: string | TOptions<StringMap> | undefined
  placeholder?: string | TOptions<StringMap> | undefined
}

const DateTimeInput: React.FC<DateTimeInputProps> = memo((props) => {
  const { placeholder, title, setShowPicker, openPicker, value, onChangeDate, error, touched } =
    useDateTimeInput(props)
  return (
    <>
      <FormControl isInvalid={!!error && touched}>
        <FormControl.Label>{title}</FormControl.Label>
        <TouchableOpacity
          onPress={() => {
            setShowPicker(true)
          }}
        >
          <View pointerEvents="none">
            <Input
              value={value && moment(value).format('HH:mm')}
              editable={false}
              placeholder={placeholder as string}
            />
          </View>
        </TouchableOpacity>
        <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
      </FormControl>
      <Picker visible={openPicker} onChange={(val) => onChangeDate(val)} value={value} />
    </>
  )
})

export default DateTimeInput
