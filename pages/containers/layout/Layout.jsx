/* eslint-disable react/react-in-jsx-scope */
import Footer from '../footer/Footer'
import Header from '../header/Header'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
