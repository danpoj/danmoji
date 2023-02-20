import { Emoji } from '@/typings'
import { decode } from 'querystring'

const EmojiCard = ({ emoji }: { emoji: Emoji }) => {
  const { name, icon } = emoji

  const clipboardIcon = () => {
    navigator.clipboard.writeText(icon)
  }

  return (
    <button
      onClick={clipboardIcon}
      className='flex flex-col shadow aspect-square rounded-lg items-center justify-center hover:shadow-lg p-2 gap-2'
    >
      <span
        className='text-xl'
        role='img'
        aria-label={name ? name : ''}
        aria-hidden={name ? 'false' : 'true'}
      >
        {icon}
      </span>

      <span className='font-mono text-[.7rem] truncate w-20 text-center'>
        {name}
      </span>
    </button>
  )
}
export default EmojiCard
