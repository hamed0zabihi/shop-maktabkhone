import { css } from '@emotion/css'
import Input from '../Input/Input'
const InputEmail = ({ placeholder = 'please insert email' }) => {
  return (
    <>
      <Input type="email" placeholder={placeholder} />
    </>
  )
}

export default InputEmail
