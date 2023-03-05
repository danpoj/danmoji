import { Emoji } from '@/typings'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { ViewState } from './ViewContext'

const EmojiCard = ({ emoji }: { emoji: Emoji }) => {
  const { name, icon } = emoji
  const { view } = useContext(ViewState)!

  const clipboardIcon = () => {
    navigator.clipboard.writeText(icon)

    toast(`${icon} ${icon} ${icon} ${icon} Copied :D`, {
      toastId: 'prevent-duplicate!',
    })
  }

  return (
    <button
      onClick={clipboardIcon}
      className={`flex flex-col shadow aspect-square rounded items-center justify-center hover:ring-[1.5px] hover:ring-stone-400 hover:shadow-none p-2 gap-2 transition-transform active:scale-90 dark:bg-stone-900 group dark:ring-stone-600 ${
        view === 'sm' ? 'md:w-16 md:h-16' : 'md:w-[7.31rem] md:h-[7.31rem]'
      }`}
    >
      <span
        className='text-xl dark:brightness-50 dark:group-hover:brightness-100'
        role='img'
        aria-label={name ? name : ''}
        aria-hidden={name ? 'false' : 'true'}
      >
        {icon}
      </span>

      {view === 'lg' && (
        <span className=' text-[.7rem] truncate w-20 text-center dark:text-slate-400 px-1'>
          {name}
        </span>
      )}
    </button>
  )
}
export default EmojiCard
