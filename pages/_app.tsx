import ToastifySetting from '@/components/ToastifySetting'
import ViewContext from '@/components/ViewContext'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <ViewContext>
        <Component {...pageProps} />
      </ViewContext>
      <ToastifySetting />
    </ThemeProvider>
  )
}
