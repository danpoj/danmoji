import ViewContext from '@/components/ViewContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ViewContext>
      <Component {...pageProps} />
    </ViewContext>
  )
}
