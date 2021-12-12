/* eslint-disable react/react-in-jsx-scope */
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

export default function Layout({ children }) {
  const theme = useTheme()
  const fontColor = css`
    color: ${theme.typhography.color};
  `

  return (
    <div className={fontColor}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
