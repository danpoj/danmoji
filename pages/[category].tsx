import EmojiSection from '@/components/EmojiSection'
import Layout from '@/components/Layout'
import MenuBar from '@/components/MenuBar'
import { categories } from '@/data/categories'
import { getEmojis } from '@/lib/get-emoji'
import { Emoji } from '@/typings'
import Head from 'next/head'

export default function CategoryPage({ emojis }: { emojis: Emoji[] }) {
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

export async function getStaticPaths() {
  const paths = categories.map((category) => ({
    params: {
      category: category.path,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: {
  params: { category: string }
}) {
  const emojis = await getEmojis(params.category)

  return {
    props: {
      emojis,
    },
  }
}
