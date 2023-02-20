import EmojiSection from '@/components/EmojiSection'
import Layout from '@/components/Layout'
import MenuBar from '@/components/MenuBar'
import { getEmojis } from '@/lib/get-emoji'
import { Emoji } from '@/typings'

export default function Home({ emojis }: { emojis: Emoji[] }) {
  return (
    <Layout>
      <MenuBar />
      <EmojiSection emojis={emojis} />
    </Layout>
  )
}

export async function getStaticProps() {
  const emojis = await getEmojis('animals-and-nature')

  return {
    props: {
      emojis,
    },
  }
}
