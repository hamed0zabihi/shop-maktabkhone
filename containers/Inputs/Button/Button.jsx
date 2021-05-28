import { css } from '@emotion/css'
const Button = ({ type = 'button', children = 'button' }) => {
  return <button type={type}>{children}</button>
}

export default Button
