import ToastifySetting from '@/components/ToastifySetting'
import ViewContext from '@/components/ViewContext'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Special_Elite } from '@next/font/google'
import { DefaultSeo } from 'next-seo'
import { seo } from '@/lib/seo'
import '@/styles/globals.css'

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <ThemeProvider attribute='class'>
        <ViewContext>
          <main className={specialElite.className}>
            <Component {...pageProps} />
          </main>
        </ViewContext>
        <ToastifySetting />
      </ThemeProvider>
    </>
  )
}
