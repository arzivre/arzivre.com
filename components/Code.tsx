import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from 'prism-react-renderer'
// import { useClipboard } from '@mantine/hooks'

// const Copy = ({ code }: any) => {
//   const clipboard = useClipboard({ timeout: 500 })
//   return (
//     <Button
//       color={clipboard.copied ? 'teal' : 'blue'}
//       onClick={() => clipboard.copy(code)}
//     >
//       {clipboard.copied ? 'Copied' : 'Copy'}
//     </Button>
//   )
// }

const poimandres: PrismTheme = {
  plain: { color: '#a6accd', backgroundColor: '#1b1e28' },
  styles: [
    {
      types: ['comment', 'punctuation'],
      style: { color: '#767C9DB0', fontStyle: 'italic' },
    },
    {
      types: ['builtin', 'variable', 'function', 'string'],
      style: { color: '#ADD7FF' },
    },
    { types: ['constant'], style: { color: '#E4F0FB' } },
    {
      types: [
        'keyword',
        'tag',
        'deleted',
        'number',
        'char',
        'symbol',
        'inserted',
      ],
      style: { color: '#5DE4C7' },
    },
    { types: ['operator', 'changed'], style: { color: '#91B4D5' } },
    { types: ['boolean'], style: { color: '#D0679D' } },
    { types: ['hexcode'], style: { color: '#FFFFFF' } },
    {
      types: ['attr-name', 'selector'],
      style: { color: '#91B4D5', fontStyle: 'italic' },
    },
    { types: ['regex'], style: { color: '#5FB3A1' } },
  ],
}

interface CodeProps {
  children: string
  className: string
}

export const Code = ({ children, className }: CodeProps) => {
  const language = className?.replace(/language-/, '')
  return (
    <Highlight
      {...defaultProps}
      theme={poimandres}
      code={children}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={i} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
export default Code
