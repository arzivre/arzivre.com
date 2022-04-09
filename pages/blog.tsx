import { createStyles, Text, Title } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.white,
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
    <>
      <Title className={classes.title}>
        My{' '}
        <Text
          component='span'
          inherit
          variant='gradient'
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          Blog
        </Text>{' '}
        Post
      </Title>
      <div className='lorem'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        voluptate, quaerat incidunt autem corporis fuga eos vitae necessitatibus
        molestiae eligendi esse adipisci exercitationem, provident ad sequi aut
        inventore sint! Ad.
      </div>
    </>
  )
}
export default Blog
