import React from 'react'
import { CheckIcon, FormControl, ISelectProps, Select } from 'native-base'
import useDropdown from './useDropdown'
import { StringMap, TOptions } from 'i18next'

export type Option = { label: string; value: string }
export interface DropdownProps extends Omit<ISelectProps, 'placeholder'> {
  id: string
  title: string | TOptions<StringMap> | undefined
  placeholder?: string | TOptions<StringMap> | undefined
  options: Option[]
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { options, title, value, touched, error, onChangeValue } = useDropdown(props)
  return (
    <FormControl isInvalid={!!error && touched}>
      <Select
        selectedValue={value}
        placeholder={title as string}
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />
        }}
        mt={1}
        onValueChange={(itemValue) => onChangeValue(itemValue)}
      >
        {options.map(({ label, value }) => (
          <Select.Item key={value} label={label} value={value} />
        ))}
      </Select>
      <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
    </FormControl>
  )
}

export default Dropdown
