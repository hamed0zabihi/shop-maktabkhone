import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const H2 = ({ children, align = 'left' }) => {
  const theme = useTheme()
  const cssH2Default = css`
    text-align: ${align};
    margin: ${theme.typhography.h2.margin};
    font-weight: ${theme.typhography.h2.fontWeight};
    line-height: ${theme.typhography.h2.lineHeight};
    font-size: ${theme.typhography.h2.fontSize};
  `

  return <h2 className={cssH2Default}>{children}</h2>
}

export default H2
