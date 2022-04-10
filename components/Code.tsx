import { Prism } from '@mantine/prism'
import Highlight, { defaultProps } from 'prism-react-renderer'
interface CodeProps {
  children: any
  className: any
}

export default function Code({ children, className }: CodeProps) {
  const language = className.replace(/language-/, '')
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
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

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`
interface CodeProps {
  children: any
  language: any
}
export const CodePrism = ({ language, children }: CodeProps) => {
  return <Prism language={language}>{children}</Prism>
}
