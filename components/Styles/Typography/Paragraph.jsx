import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Paragraph = ({ children }) => {
  const theme = useTheme()
  const cssDefaultParagraph = css`
    font-weight: ${theme.typhography.paragraph.fontWeight};
    line-height: ${theme.typhography.paragraph.lineHeight};
    font-size: ${theme.typhography.paragraph.fontSize};
  `
  return <p className={cssDefaultParagraph}>{children}</p>
}

export default Paragraph
