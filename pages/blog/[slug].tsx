import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Container } from '@mantine/core'

import MDXComponents from 'components/MDXComponents'
import { getPost, getSlugs } from 'libs/posts'

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getSlugs()
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const { content, date, title, excerpt, image } = await getPost(slug)
  const body = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [],
    },
  })
  return { props: { post: { body, date, title, excerpt, image, slug } } }
}

const Post = ({ post }: any) => {
  return (
    <Container size={'md'}>
      <Head>
        <title>{post.title} - Arzivre</title>
      </Head>
      <main>
        <p>{post.date.slice(0, 10)}</p>

        <MDXRemote {...post.body} components={MDXComponents} />
      </main>
    </Container>
  )
}

export default Post
