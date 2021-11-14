import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const H3 = ({ children, align = 'left' }) => {
  const theme = useTheme()
  const cssH3Default = css`
    text-align: ${align};
    margin: ${theme.typhography.h3.margin};
    font-weight: ${theme.typhography.h3.fontWeight};
    line-height: ${theme.typhography.h3.lineHeight};
    font-size: ${theme.typhography.h3.fontSize};
  `

  return <h3 className={cssH3Default}>{children}</h3>
}

export default H3
