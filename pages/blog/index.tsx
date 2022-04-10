import NextLink from 'next/link'
import {
  Button,
  Card,
  Container,
  createStyles,
  Input,
  Text,
  Title,
} from '@mantine/core'
import { Search } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colors.gray[9],
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
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
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}))

const Blog = () => {
  const { classes } = useStyles()
  return (
    <Container size={'md'}>
      <Title className={classes.title} mb={20}>
        My Blog Post
      </Title>
      <div className='lorem'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        voluptate, quaerat incidunt autem corporis fuga eos vitae necessitatibus
        molestiae eligendi esse adipisci exercitationem, provident ad sequi aut
        inventore sint! Ad.
      </div>
      <Input
        icon={<Search size={16} />}
        placeholder='Search'
        my={20}
        className={classes.search}
      />
      <Title order={2} mt={20} mb={10}>
        All Post
      </Title>
      <article>
        <NextLink href='/blog/web-developer-workflow' passHref>
          <Button
            component='a'
            style={{ background: 'none', color: '#101113', padding: 0 }}
          >
            <Text weight={500} size='lg'>
              Web Developer Workflow
            </Text>
          </Button>
        </NextLink>
        <Text size='sm' color='gray' style={{ lineHeight: 1.5 }}>
          As someone who does several full stack projects as well as does full
          stack projects at work, I`&apos;`d summarize my suggestions
        </Text>
      </article>
      <article>
        <NextLink href='/blog/components' passHref>
          <Button
            component='a'
            style={{ background: 'none', color: '#101113', padding: 0 }}
          >
            <Text weight={500} size='lg'>
              Tes components
            </Text>
          </Button>
        </NextLink>
        <Text size='sm' color='gray' style={{ lineHeight: 1.5 }}>
          Tes components
        </Text>
      </article>
      <article>
        <NextLink href='/blog/tes' passHref>
          <Button
            component='a'
            style={{ background: 'none', color: '#101113', padding: 0 }}
          >
            <Text weight={500} size='lg'>
              Tes
            </Text>
          </Button>
        </NextLink>
        <Text size='sm' color='gray' style={{ lineHeight: 1.5 }}>
          tes
        </Text>
      </article>
    </Container>
  )
}
export default Blog
