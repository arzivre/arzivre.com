import { Container, Footer, Group, Text } from '@mantine/core'

export const FooterArzivre = () => {
  return (
    <Container size={'xl'}>
      <Footer
        height={60}
        py='md'
        style={{
          background: 'transparent',
        }}
      >
        <Group direction='row' grow>
          <Text align='left'>Web Developer</Text>
          <Text align='left'>Kediri, Jawa Timur</Text>
          <Text align='left'>sonyfauzi@outlook.co.id</Text>
          <Text align='left'>sosmed</Text>
          <Text align='left' >sosmed</Text>
        </Group>
      </Footer>
    </Container>
  )
}
export default FooterArzivre
