import { readdir, readFile } from 'fs/promises'
import matter from 'gray-matter'

export async function getPost(slug: string) {
  const source = await readFile(`contents/posts/${slug}.mdx`, 'utf8')
  const {
    data: { publishedAt, title, summary, image },
    content,
  } = matter(source)
  return { publishedAt, title, summary, image, content }
}

export async function getPosts() {
  const slugs = await getSlugs()
  const posts = []
  for (const slug of slugs) {
    const post = await getPost(slug)
    posts.push({ slug, ...post })
  }
  return posts
}

export async function getSlugs() {
  const suffix = '.mdx'
  const files = await readdir('contents/posts')
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length))
}
