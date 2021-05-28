/* eslint-disable react/react-in-jsx-scope */
import Layout from '../containers/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
