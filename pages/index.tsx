import EmojiSection from '@/components/EmojiSection'
import Layout from '@/components/Layout'
import MenuBar from '@/components/MenuBar'
import { getEmojis } from '@/lib/get-emoji'
import { Emoji } from '@/typings'
import Head from 'next/head'

export default function Home({ emojis }: { emojis: Emoji[] }) {
  return (
    <Layout>
      <Head>
        <title>Danmoji</title>
      </Head>
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
