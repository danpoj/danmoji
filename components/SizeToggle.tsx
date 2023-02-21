import { useContext } from 'react'
import { ViewState } from './ViewContext'

export default function SizeToggle() {
  const { view, setView } = useContext(ViewState)!

  const onViewClick = () => {
    if (view === 'lg') {
      setView('sm')
    } else {
      setView('lg')
    }
  }

  return (
    <div className='flex items-center gap-2 justify-end'>
      <span className='text-sm text-slate-900 dark:text-slate-300 font-bold'>
        View
      </span>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          onChange={onViewClick}
          type='checkbox'
          checked={view === 'sm'}
          className='sr-only peer'
        />
        <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-700 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-400 peer-checked:bg-slate-700"></div>
      </label>
    </div>
  )
}
