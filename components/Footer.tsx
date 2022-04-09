import { Container, createStyles, ActionIcon, Group, Text } from '@mantine/core'
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  footer: {
    position: 'sticky',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xs,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}))

export const FooterArzivre = () => {
  const { classes } = useStyles()
  return (
    <Container size={'xl'} className={classes.footer}>
      <Text color='dimmed'>
        <Text>Kediri, Jawa Timur</Text>
        arzivreart@gmail.com
      </Text>

      <Group direction='column' spacing={0}>
        <Group spacing={0} className={classes.links} position='right' noWrap>
          <ActionIcon size='lg'>
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
        <Text size='xl' weight={500}>
          Web Developer
        </Text>
      </Group>
    </Container>
  )
}
export default FooterArzivre
