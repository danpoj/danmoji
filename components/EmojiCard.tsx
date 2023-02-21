import { Emoji } from '@/typings'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { ViewState } from './ViewContext'

const EmojiCard = ({ emoji }: { emoji: Emoji }) => {
  const { name, icon, category, group } = emoji
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
      className={`flex flex-col shadow aspect-square rounded-lg items-center justify-center hover:ring-[1.5px] hover:ring-stone-400 hover:shadow-none p-2 gap-2 transition-transform active:scale-90 ${
        view === 'sm' && 'p-4'
      }`}
    >
      <span
        className='text-xl'
        role='img'
        aria-label={name ? name : ''}
        aria-hidden={name ? 'false' : 'true'}
      >
        {icon}
      </span>

      {view === 'lg' && (
        <span className='font-mono text-[.7rem] truncate w-20 text-center'>
          {name}
        </span>
      )}
    </button>
  )
}
export default EmojiCard
