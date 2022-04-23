import { useState } from 'react'
import NextLink from 'next/link'
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Button,
  Title,
  Text,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
  header: {
    background: '#191621',
    border: 'none',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: HEADER_HEIGHT,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  link: {
    background: 'transparent',
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[0]
        : theme.colors.gray[9],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : theme.colors.gray[9],
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.gray[9]
          : theme.colors.gray[0],
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))

interface HeaderResponsiveProps {
  links: { link: string; label: string }[]
}

export const HeaderArzivre = ({ links }: HeaderResponsiveProps) => {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()

  const items = links.map((link) => (
    <NextLink key={link.label} href={link.link} passHref>
      <Button
        component='a'
        className={classes.link}
        onClick={() => {
          setActive(link.link)
          toggleOpened(false)
        }}
      >
        {link.label}
      </Button>
    </NextLink>
  ))

  return (
    <main style={{ background: 'transparent' }}>
      <Header height={HEADER_HEIGHT} className={classes.header}>
        <Container size={'xl'} className={classes.inner}>
          <NextLink href={'/'} as={'/'} passHref>
            <Button component='a' style={{ background: 'none' }}>
              <Title
                order={1}
                style={{
                  fontFamily: 'Varela Round',
                  fontSize: '2.5rem',
                  fontWeight: '100',
                }}
              >
                Arzivre
              </Title>
            </Button>
          </NextLink>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size='sm'
          />

          <Transition
            transition='pop-top-right'
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                <Text size='xl'>{items}</Text>
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </main>
  )
}
