import NextLink from 'next/link'
import { Anchor, Box, Button, Text, Title } from '@mantine/core'
import { Code } from './Code'

const title = {
  color: '#DEE2E6',
  fontFamily: 'Greycliff CF',
  lineHeight: 1,
  paddingBottom: '20px',
}

const CustomLink = (props: any) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Button
          component='a'
          {...props}
          style={{
            background: 'none',
            color: '#868E96',
            cursor: 'pointer',
            marginLeft: '-1.5em',
            paddingRight: '0.5em',
            position: 'absolute',
            with: '80%',
            // visibility: 'hidden',
            '&:hover': {
              visibility: 'visible',
            },
          }}
        >
          {props.children}
        </Button>
      </NextLink>
    )
  }

  return <Anchor target='_blank' rel='noopener noreferrer' {...props} />
}
interface MDXProps {
  props: string
}

const MDXComponents = {
  h1: (props: MDXProps) => <Title order={1} {...props} style={title} />,
  h2: (props: MDXProps) => <Title order={2} {...props} style={title} />,
  h3: (props: MDXProps) => <Title order={3} {...props} style={title} />,
  p: (props: MDXProps) => (
    <Text component='p' mt={4} {...props} style={{ color: '#bebebe' }} />
  ),
  a: CustomLink,
  code: (props: any) => <Code {...props} />,
  ul: (props: MDXProps) => (
    <Box component='ul' pt={2} pl={4} ml={2} {...props} />
  ),
  ol: (props: MDXProps) => (
    <Box component='ol' pt={2} pl={4} ml={2} {...props} />
  ),
  li: (props: MDXProps) => <Box component='li' pb={1} {...props} />,
  br: (props: MDXProps) => <Box style={{ height: '24px' }} {...props} />,
}
export default MDXComponents
