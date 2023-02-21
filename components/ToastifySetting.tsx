import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function ToastifySetting() {
  return (
    <ToastContainer
      position='top-center'
      autoClose={1000}
      hideProgressBar
      closeOnClick
      pauseOnHover={false}
      draggable
      theme='dark'
      transition={Zoom}
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '12px',
      }}
    />
  )
}
