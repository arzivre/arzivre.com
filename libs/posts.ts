import { readdir, readFile } from 'fs/promises'
import matter from 'gray-matter'

export async function getPost(slug: string) {
  const source = await readFile(`contents/posts/${slug}.mdx`, 'utf8')
  const {
    data: { date, title, excerpt, image },
    content,
  } = matter(source)
  return { date, title, excerpt, image, content }
}

export async function getPosts() {
  const slugs = await getSlugs()
  const posts = []
  for (const slug of slugs) {
    const { date, title, excerpt } = await getPost(slug)
    const post = { title, date, excerpt }
    posts.push({ slug, ...post })
  }
  posts.sort(function (a, b) {
    //@ts-ignore
    return new Date(b.date) - new Date(a.date)
  })
  return posts.slice(0, 9)
}

export async function getSlugs() {
  const suffix = '.mdx'
  const files = await readdir('contents/posts')
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length))
}
