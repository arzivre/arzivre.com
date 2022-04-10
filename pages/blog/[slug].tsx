import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getPost, getSlugs } from 'libs/posts'
import { Container } from '@mantine/core'

interface Props {
  mdxSource: MDXRemoteSerializeResult
}

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
  const { content, publishedAt, title, summary, image } = await getPost(slug)
  const body = await serialize(content)
  return { props: { post: { body, publishedAt, title, summary, image, slug } } }
}

const Post = ({ post }: any) => {
  return (
    <Container size={'md'}>
      <Head>
        <title>{post.title} - Arzivre</title>
      </Head>
      <main>
        <p>{post.publishedAt}</p>

        <MDXRemote {...post.body} />
      </main>
    </Container>
  )
}
export default Post
