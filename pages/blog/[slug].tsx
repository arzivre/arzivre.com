import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Container } from '@mantine/core'
import Code, { CodePrism } from 'components/Code'
import { getPost, getSlugs } from 'libs/posts'

const components = {
  Code,
  CodePrism,
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
  const { content, date, title, excerpt, image } = await getPost(slug)
  const body = await serialize(content)
  return { props: { post: { body, date, title, excerpt, image, slug } } }
}

const Post = ({ post }: any) => {
  return (
    <Container size={'md'}>
      <Head>
        <title>{post.title} - Arzivre</title>
      </Head>
      <main>
        <p>{post.publishedAt}</p>

        <MDXRemote {...post.body} components={components as any} />
      </main>
    </Container>
  )
}
export default Post
