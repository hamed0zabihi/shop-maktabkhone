import { css } from '@emotion/css'

const Input = ({ type = 'text', placeholder = 'please write some thing' }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} />
    </>
  )
}
export default Input
