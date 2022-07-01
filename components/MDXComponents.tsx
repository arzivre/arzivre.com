import NextLink from 'next/link'
import { Image } from '@mantine/core'
import { Code } from './Code'

const CustomLink = (props: any) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <button
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
        </button>
      </NextLink>
    )
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />
}

const MDXComponents = {
  a: CustomLink,
  img: Image,
}

export default MDXComponents
