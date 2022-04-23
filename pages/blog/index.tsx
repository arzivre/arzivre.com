import { Key } from 'react'
import NextLink from 'next/link'
import {
  Anchor,
  Button,
  Card,
  Container,
  createStyles,
  Divider,
  Input,
  Text,
  Title,
} from '@mantine/core'
import { Search } from 'tabler-icons-react'
import { getPosts } from 'libs/posts'

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: 'Greycliff CF',
    color: theme.colors.gray[3],
    lineHeight: 1,
  },

  hero: {
    fontSize: 100,

    '&:hover': {
      color: theme.colorScheme === 'dark' ? '#f4569d' : theme.colors.indigo[0],
    },

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 50,
      lineHeight: 1.15,
    },
  },

  subtitle: {
    fontSize: 50,

    '&:hover': {
      color: theme.colorScheme === 'dark' ? '#f4569d' : theme.colors.indigo[0],
    },

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      lineHeight: 1.15,
    },
  },

  search: {
    padding: '0.5rem 0',
  },
}))

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
  const { classes, cx } = useStyles()
  return (
    <main style={{ background: '#100e17', padding: '20px 0' }}>
      <Container size={'sm'}>
        <Title mb={40}>
          <Text
            component='span'
            weight={600}
            variant='gradient'
            gradient={{ from: 'blue', to: 'green', deg: 45 }}
            className={cx(classes.title, classes.hero)}
          >
            Blog
          </Text>
        </Title>
        {/* <Text color='#bebebe' mb={10}>
          Untuk menjaga ilmu pengetahuan abadi di internet
        </Text> */}
        <Input
          icon={<Search size={16} />}
          placeholder='Blog apa yang ingin kamu baca ?'
          className={classes.search}
        />
        <Title
          order={2}
          my={20}
          className={cx(classes.title, classes.subtitle)}
        >
          All Post
        </Title>
        {posts.map((post: PostProps) => (
          <article key={post.date}>
            <NextLink href={`/blog/${post.slug}`} passHref>
              <Anchor className={classes.title}>
                <Title order={3}>{post.title}</Title>
              </Anchor>
            </NextLink>
            <Text size='md' color='#bebebe' mb={20} style={{ lineHeight: 1.5 }}>
              {post.excerpt}
            </Text>
          </article>
        ))}
      </Container>
    </main>
  )
}
export default Blog
