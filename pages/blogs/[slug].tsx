import { GetStaticPaths, GetStaticProps } from 'next'
import { getPost, getSlugs } from 'libs/posts'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Layout from 'components/Layout'
import MDXComponents from 'components/MDXComponents'

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
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main className='container mx-auto max-w-4xl my-10 prose'>
        <p className='text-slate-600'>{post.date.slice(0, 10)}</p>
        <h1 className='font-serif text-[calc(1em+10vh)]'>{post.title}</h1>
          <MDXRemote {...post.body} components={MDXComponents} />
      </main>
    </Layout>
  )
}

export default Post
