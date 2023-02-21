import { useTheme } from 'next-themes'

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  const onDarkModeToggleClicked = () =>
    setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div className='flex items-center gap-2 justify-end'>
      <span className='text-sm text-slate-900 dark:text-slate-300 font-bold'>
        {theme === 'dark' ? '🌙' : '🌤'}
      </span>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          onChange={onDarkModeToggleClicked}
          type='checkbox'
          className='sr-only peer'
        />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-700 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-700"></div>
      </label>
    </div>
  )
}
