import { Key } from 'react'
import NextLink from 'next/link'
import { getPosts } from 'libs/posts'
import Layout from 'components/Layout'

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: { posts },
  }
}
interface BlogIndexProps {
  posts: [PostProps]
}
interface PostProps {
  date: Key | number
  slug: string
  title: string
  summary: string
}

const Blog = ({ posts }: BlogIndexProps) => {
  return (
    <Layout>
      <main className='my-[calc(1rem+5vh)] mx-4 grid min-h-[50vh] grid-cols-[2fr_3fr_auto_1fr]'>
        <h1 className='col-[2_/_4] ml-2 mb-4 md:mb-0 font-serif text-[calc(1em+10vw)]'>
          Blog
        </h1>

        {posts.map((post: PostProps) => (
          <article
            key={post.date}
            className='col-[3_/_4] mb-[1em] max-w-[50ch] leading-normal'
          >
            <NextLink href={`/blogs/${post.slug}`}>
              <a className=''>
                <h3 className='text-3xl hover:underline'>{post.title}</h3>
              </a>
            </NextLink>
            <p className='text-slate-600'>{post.summary}</p>
          </article>
        ))}
      </main>
    </Layout>
  )
}
export default Blog
