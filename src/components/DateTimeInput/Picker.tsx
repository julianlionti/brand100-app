import React, { memo, useState } from 'react'
import DateTimePicker, { TimePickerOptions } from '@react-native-community/datetimepicker'
import { Actionsheet, Box, ScrollView, Text } from 'native-base'
import usePicker from './usePicker'

export interface PickerProps {
  visible?: boolean
  onChange: (date: Date | '') => void
  value: Date | ''
}

const Picker: React.FC<PickerProps> = memo((props) => {
  const { value, visible } = props
  const { selectItem, options, title } = usePicker(props)

  return (
    <Actionsheet
      isOpen={visible}
      onClose={() => {
        false
      }}
    >
      <Actionsheet.Content>
        <Box w="100%" h={60} px={4} justifyContent="center">
          <Text textAlign={'center'} fontSize="16">
            {title}
          </Text>
        </Box>
        <ScrollView width={'100%'}>
          {/* {options.map((e) => (
            <Actionsheet.Item key={e.title} onPress={() => selectItem(e.value)}>
              {e.title}
            </Actionsheet.Item>
          ))} */}
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  )
})

export default Picker
