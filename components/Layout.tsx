import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='max-w-7xl mx-auto h-screen p-10 '>
      <div className='flex justify-center gap-4 items-center h-full flex-col md:flex-row'>
        {children}
      </div>
    </div>
  )
}
