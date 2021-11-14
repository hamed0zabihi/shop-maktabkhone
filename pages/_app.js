/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from '@emotion/react'
import Layout from '../components/Styles/Layout/Layout'
import theme from '../configs/theme'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
