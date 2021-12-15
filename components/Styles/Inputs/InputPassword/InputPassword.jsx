import { css } from '@emotion/css'
import Input from '../Input/Input'

const InputPassword = ({
  placeholder = 'please insert password',
  id = '',
  customCalss = '',
  required = '',
  onChanged,
}) => {
  return (
    <>
      <Input
        type="password"
        placeholder={placeholder}
        id={id}
        customCalss={customCalss}
        required={required}
        onChanged={onChanged}
      />
    </>
  )
}

export default InputPassword
