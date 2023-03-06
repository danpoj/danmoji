import type { DefaultSeoProps } from 'next-seo'

const title = `Danmoji`
const description = `The emoji search engine powered by EmojiHub API. Feel free to copy emojis to the clipboard.`
const domain = `danmoji.vercel.app`
const meta = `Emoji search Engine`

export const seo: DefaultSeoProps = {
  title: title + ' | ' + meta,
  description,
  openGraph: {
    title,
    type: 'website',
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: '../public/danmoji.png',
        width: 1600,
        height: 836,
        alt: title,
      },
    ],
  },
}
