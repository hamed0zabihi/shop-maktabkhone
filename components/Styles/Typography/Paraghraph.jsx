import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Paragraph = ({ children }) => {
  const theme = useTheme()
  const cssDefaultParagraph = css`
    font-weight: ${theme.typhography.Paragraph.fontWeight};
    line-height: ${theme.typhography.Paragraph.lineHeight};
    font-size: ${theme.typhography.Paragraph.fontSize};
  `
  return <p className={cssDefaultParagraph}>{children}</p>
}

export default Paragraph
