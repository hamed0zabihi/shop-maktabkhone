import { css } from '@emotion/css'
import Input from '../Input/Input'

const InputPassword = ({ placeholder = 'please insert password' }) => {
  return (
    <>
      <Input type="password" placeholder={placeholder} />
    </>
  )
}

export default InputPassword
