/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { ThemeProvider } from '@emotion/react'
import Layout from '../components/Styles/Layout/Layout'
import theme from '../configs/theme'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default MyApp
