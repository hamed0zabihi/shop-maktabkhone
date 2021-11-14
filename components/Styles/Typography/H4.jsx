import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const H4 = ({ children, align = 'left' }) => {
  const theme = useTheme()
  const cssH4Default = css`
    text-align: ${align};
    margin: ${theme.typhography.h4.margin};
    font-weight: ${theme.typhography.h4.fontWeight};
    line-height: ${theme.typhography.h4.lineHeight};
    font-size: ${theme.typhography.h4.fontSize};
  `

  return <h4 className={cssH4Default}>{children}</h4>
}

export default H4
