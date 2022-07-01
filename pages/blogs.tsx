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
  excerpt: string
}

const Blog = ({ posts }: BlogIndexProps) => {
  return (
    <Layout>
      <main className='container mx-auto px-4 max-w-3xl my-10'>
        <h1 className='font-serif text-[calc(1em+10vh)] mb-8'>Blog</h1>

        {posts.map((post: PostProps) => (
          <article key={post.date} className='mb-4'>
            <NextLink href={`/blogs/${post.slug}`}>
              <a className=''>
                <h3 className='text-3xl'>{post.title}</h3>
              </a>
            </NextLink>
            <p className='text-slate-600'>{post.excerpt}</p>
          </article>
        ))}

      </main>
    </Layout>
  )
}
export default Blog
