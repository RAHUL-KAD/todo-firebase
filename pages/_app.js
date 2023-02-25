import LayoutPage from '@/components/LayoutPage'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <LayoutPage>
  <Component {...pageProps} />
  </LayoutPage>
  )
}
