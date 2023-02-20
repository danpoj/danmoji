import { Emoji } from '@/typings'
import { useContext } from 'react'
import EmojiCard from './EmojiCard'
import { ViewState } from './ViewContext'

export default function EmojiSection({ emojis }: { emojis: Emoji[] }) {
  const { view } = useContext(ViewState)!

  return (
    <div
      className={`grid grid-cols-4 gap-2 h-[40rem] overflow-y-scroll p-2 scrollbar-hide ${
        view === 'sm' && 'grid-cols-7 p-[0.38rem]'
      }`}
    >
      {emojis.map((emoji) => (
        <EmojiCard key={emoji.name} emoji={emoji} />
      ))}
    </div>
  )
}
