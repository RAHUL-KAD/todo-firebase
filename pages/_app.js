import LayoutPage from '@/components/LayoutPage'
import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <AuthProvider>
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  </AuthProvider>
  )
}
