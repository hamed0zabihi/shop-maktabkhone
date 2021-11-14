import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const H5 = ({ children, align = 'left' }) => {
  const theme = useTheme()
  const cssH5Default = css`
    text-align: ${align};
    margin: ${theme.typhography.h5.margin};
    font-weight: ${theme.typhography.h5.fontWeight};
    line-height: ${theme.typhography.h5.lineHeight};
    font-size: ${theme.typhography.h5.fontSize};
  `

  return <h5 className={cssH5Default}>{children}</h5>
}

export default H5
