import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const H1 = ({ children, align = 'left' }) => {
  const theme = useTheme()
  const cssH1Default = css`
    text-align: ${align};
    margin: ${theme.typhography.h1.margin};
    font-weight: ${theme.typhography.h1.fontWeight};
    line-height: ${theme.typhography.h1.lineHeight};
    font-size: ${theme.typhography.h1.fontSize};
  `

  return <h1 className={cssH1Default}>{children}</h1>
}

export default H1
