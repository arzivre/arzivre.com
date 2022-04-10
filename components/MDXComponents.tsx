import NextLink from 'next/link'
import { Box, Button, Text, Title } from '@mantine/core'
import { CodePrism as Code } from './Code'

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
  h1: (props: MDXProps) => <Title order={1} {...props} />,
  h2: (props: MDXProps) => <Title order={2} {...props} />,
  h3: (props: MDXProps) => <Title order={3} {...props} />,
  p: (props: MDXProps) => <Text component='p' mt={4} {...props} />,
  a: CustomLink,
  pre: (props: any) => <Code {...props} />,
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
