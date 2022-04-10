import { Prism } from '@mantine/prism'

interface CodeProps {
  children: any
  language: any
}
export const Code = ({ children, language }: CodeProps) => {
  return (
    <Prism colorScheme='dark' withLineNumbers language={language}>
      {children}
    </Prism>
  )
}
export default Code
