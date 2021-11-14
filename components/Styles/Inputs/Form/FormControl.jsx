import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const FormControl = ({ children }) => {
  const theme = useTheme()

  const cssDefaultFormControl = css`
    display: flex;
    padding: ${theme.spaces[3]} auto;
  `
  return <div className={cssDefaultFormControl}>{children}</div>
}

export default FormControl
