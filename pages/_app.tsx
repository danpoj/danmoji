import ToastifySetting from '@/components/ToastifySetting'
import ViewContext from '@/components/ViewContext'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Special_Elite } from '@next/font/google'

const aBeeZee = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <ViewContext>
        <main className={aBeeZee.className}>
          <Component {...pageProps} />
        </main>
      </ViewContext>
      <ToastifySetting />
    </ThemeProvider>
  )
}
