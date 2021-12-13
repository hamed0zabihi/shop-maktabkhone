/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './../redux/store/Store'
import { ThemeProvider } from '@emotion/react'
import Layout from '../components/Styles/Layout/Layout'
import theme from '../configs/theme'

const MyApp = ({ Component, pageProps }) => (
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </Provider>
)

export default MyApp
