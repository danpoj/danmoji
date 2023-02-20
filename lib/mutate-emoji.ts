import { Emoji } from '@/typings'

function convertHtmlCodeToEmojiIcon(htmlCode: string) {
  return String.fromCodePoint(+htmlCode.slice(2, htmlCode.length - 1))
}

export function addEmojiIcon(emojis: Emoji[]) {
  return emojis.map((emoji) => ({
    ...emoji,
    icon: convertHtmlCodeToEmojiIcon(emoji.htmlCode[0]),
  }))
}
