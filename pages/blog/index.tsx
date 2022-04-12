import NextLink from 'next/link'
import {
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
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react'

const useStyles = createStyles((theme) => ({
  title: {
    color: '#0fb6d6',
    fontFamily: `${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.gray[0]
          : theme.colors.dark[9],
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.gray[9]
          : theme.colors.indigo[0],
    },

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  subTitle: {
    color: '#0fb6d6',
    fontFamily: `${theme.fontFamily}`,
    '&:hover': {
      color: theme.colorScheme === 'dark' ? '#f4569d' : theme.colors.indigo[0],
    },

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: ` ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
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
  const { classes } = useStyles()
  return (
    <main style={{ background: '#100e17', padding: '20px 0 20px' }}>
      <Container size={'sm'}>
        <Title className={classes.title} mb={20}>
          My Blog Post
        </Title>
        <div className='lorem' style={{ color: '#bebebe' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          voluptate, quaerat incidunt autem corporis fuga eos vitae
          necessitatibus molestiae eligendi esse adipisci exercitationem,
          provident ad sequi aut inventore sint! Ad.
        </div>
        <Input
          icon={<Search size={16} />}
          placeholder='Search'
          my={20}
          className={classes.search}
        />
        <Title order={2} mt={20} mb={10} style={{ color: '#f4569d' }}>
          All Post
        </Title>
        {posts.map((post: PostProps) => (
          <article key={post.date}>
            <NextLink href={`/blog/${post.slug}`} passHref>
              <Button
                component='a'
                style={{ background: 'none', color: '#101113', padding: 0 }}
              >
                <Text weight={500} size='lg' className={classes.subTitle}>
                  {post.title}
                  <Divider size={'xs'} color='cyan' />
                </Text>
              </Button>
            </NextLink>
            <Text size='sm' color='#bebebe' style={{ lineHeight: 1.5 }}>
              {post.excerpt}
            </Text>
          </article>
        ))}
        <NextLink href='/blog/components' passHref>
          <Button
            component='a'
            style={{ background: 'none', color: '#101113', padding: 0 }}
          >
            Tes components
          </Button>
        </NextLink>
        <br />
        <NextLink href='/blog/tes' passHref>
          <Button
            component='a'
            style={{ background: 'none', color: '#101113', padding: 0 }}
          >
            Tes
          </Button>
        </NextLink>
      </Container>
    </main>
  )
}
export default Blog
