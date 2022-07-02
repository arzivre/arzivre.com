import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
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

interface CodeProps {
  children: any
  className: any
}

export const Code = ({ children, className }: CodeProps) => {
  const language = className?.replace(/language-/, '')
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            marginTop: 20,
            marginBottom: 20,
            padding: 16,
            borderRadius: '0.25rem',
          }}
        >
          <div>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={i} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </div>
        </pre>
      )}
    </Highlight>
  )
}
export default Code
