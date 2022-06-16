import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Container, Title } from '@mantine/core'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import MDXComponents from 'components/MDXComponents'
import { getPost, getSlugs } from 'libs/posts'
import Layout from 'components/Layout'

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
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
  })
  return { props: { post: { body, date, title, excerpt, image, slug } } }
}

const classes = {
  main: { background: '#0d0b12', margin: 0, padding: '20px 0' },
  title: {
    color: '#0fb6d6',
    fontSize: '60px',
    fontFamily: 'Greycliff CF',
  },
}

const Post = ({ post }: any) => {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main style={classes.main}>
        <Container size={'sm'}>
          <Title order={1} style={classes.title}>
            {post.title}
          </Title>
          <p>{post.date.slice(0, 10)}</p>

          <MDXRemote {...post.body} components={MDXComponents} />
        </Container>
      </main>
    </Layout>
  )
}

export default Post
