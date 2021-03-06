import { GetStaticPaths, GetStaticProps } from 'next'
import { getPost, getSlugs } from 'lib/posts'
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
  const { content, date, title, summary, image } = await getPost(slug)
  const body = await serialize(content)
  return { props: { post: { body, date, title, summary, image, slug } } }
}

interface PostProps {
  date: string
  slug: string
  title: string
  summary: string
  body: any
}

const Post = ({ post }: { post: PostProps }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Layout>
        <div className='container mx-auto'>
          <main className='my-[calc(1rem+5vh)] mx-4 grid min-h-[50vh] grid-cols-[2fr_3fr_auto_1fr]'>
            <header className='col-[2_/_4] ml-2'>
              <h1 className='mb-4 font-serif text-[calc(1em+6vw)] leading-none'>
                {post.title}
              </h1>
              <time className='text-slate-600'>{post.date.slice(0, 10)}</time>
            </header>
            <article className='prose col-[3_/_4] mb-[1em] max-w-[60ch] overflow-x-auto prose-code:max-w-4xl md:prose-lg lg:prose-xl'>
              <MDXRemote {...post.body} components={MDXComponents} />
            </article>
          </main>
        </div>
      </Layout>
    </>
  )
}

export default Post
