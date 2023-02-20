import { Emoji } from '@/typings'
import EmojiCard from './EmojiCard'

export default function EmojiSection({ emojis }: { emojis: Emoji[] }) {
  return (
    <div className='grid grid-cols-4 gap-4 h-[40rem] overflow-y-scroll p-2 scrollbar-hide'>
      {emojis.map((emoji) => (
        <EmojiCard key={emoji.name} emoji={emoji} />
      ))}
    </div>
  )
}
