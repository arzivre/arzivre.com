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
    <main style={{ background: 'black' }}>
      <Container size={'xl'} className={classes.footer}>
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
      </Container>
    </main>
  )
}
export default FooterArzivre
