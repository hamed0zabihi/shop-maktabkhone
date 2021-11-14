/* eslint-disable react/react-in-jsx-scope */
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
