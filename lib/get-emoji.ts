import { Emoji } from '@/typings'
import { addEmojiIcon } from './mutate-emoji'

export async function getEmojis(category: string) {
  const res = await fetch(
    `https://emojihub.yurace.pro/api/all/category/${category}`
  )
  const emojis: Emoji[] = await res.json()

  return addEmojiIcon(emojis)
}
