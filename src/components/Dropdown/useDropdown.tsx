import { useField } from 'formik'
import { DropdownProps } from './Dropdown'

const useDropdown = (props: DropdownProps) => {
  const { id, title, placeholder, options, ...dropDownProps } = props
  const [{ value }, { error, touched }, { setValue }] = useField(id)

  const onChangeValue = (value: string) => {
    setValue(value)
  }
  return { value, onChangeValue, error, touched, title, placeholder, options, ...dropDownProps }
}

export default useDropdown
