import NextLink from 'next/link'
import { Box, Button, Text, Title } from '@mantine/core'
import { Code } from './Code'

const CustomLink = (props: any) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Button component='a' {...props} />
      </NextLink>
    )
  }

  return <Button component='a' {...props} />
}
interface MDXProps {
  props: string
}

const MDXComponents = {
  h1: (props: MDXProps) => (
    <Title
      order={1}
      {...props}
      style={{ color: '#0fb6d6', fontFamily: 'Varela Round' }}
    />
  ),
  h2: (props: MDXProps) => (
    <Title
      order={2}
      {...props}
      style={{ color: '#0fb6d6', fontFamily: 'Varela Round' }}
    />
  ),
  h3: (props: MDXProps) => (
    <Title
      order={3}
      {...props}
      style={{ color: '#0fb6d6', fontFamily: 'Varela Round' }}
    />
  ),
  p: (props: MDXProps) => (
    <Text
      component='p'
      mt={4}
      {...props}
      style={{ color: '#bebebe', fontFamily: 'Varela Round' }}
    />
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
