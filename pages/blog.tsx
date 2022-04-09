import {
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
      <Title order={2} mb={20}>
        Popular Post
      </Title>
      <Card mb={5} p='xs'>
        <Text weight={500}>text</Text>
        <Text size='sm' color='dimmed' style={{ lineHeight: 1.5 }}>
          text
        </Text>
      </Card>
      <Card mb={5} p='xs'>
        <Text weight={500}>text</Text>
        <Text size='sm' color='dimmed' style={{ lineHeight: 1.5 }}>
          text
        </Text>
      </Card>
      <Card mb={5} p='xs'>
        <Text weight={500}>text</Text>
        <Text size='sm' color='dimmed' style={{ lineHeight: 1.5 }}>
          text
        </Text>
      </Card>
    </Container>
  )
}
export default Blog
