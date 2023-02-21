import ViewContext from '@/components/ViewContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ViewContext>
        <Component {...pageProps} />
      </ViewContext>
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar
        closeOnClick
        pauseOnHover={false}
        draggable
        // theme='dark'
        transition={Zoom}
        style={{
          width: '240px',
          maxWidth: '240px',
          fontWeight: 'bold',
          fontSize: '12px',
        }}
      />
    </>
  )
}
