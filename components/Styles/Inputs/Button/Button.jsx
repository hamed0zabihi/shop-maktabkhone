import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Button = ({ type = 'button', children = 'button' }) => {
  const theme = useTheme()
  const defaultCssButton = css`
    background-color: ${theme.colors.primary};
    color: ${theme.button.textColor};
    margin-top: ${theme.button.marginTop};
    display: ${theme.button.display};
    font-weight: ${theme.button.fontWeight};
    text-align: ${theme.button.textAlign};
    white-space: ${theme.button.whiteSpace};
    border: ${theme.button.border};
    padding: ${theme.button.padding};
    font-size: ${theme.button.fontSize};
    line-height: ${theme.button.lineHeight};
    border-radius: ${theme.button.borderRadius};
  `

  return (
    <button type={type} className={defaultCssButton}>
      {children}
    </button>
  )
}

export default Button
