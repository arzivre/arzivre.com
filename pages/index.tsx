import type { NextPage } from 'next'
import Image from 'next/image'
import { Center, Container, Divider, Grid, Text, Title } from '@mantine/core'

const Home: NextPage = () => {
  return (
    <main style={{ background: '#100e17' }}>
      <Container size={'xl'}>
        <Hero />
        <Project />
        <Contact />
      </Container>
    </main>
  )
}

export default Home

const Hero = () => {
  return (
    <>
      <Center pt={100}>
        <Title order={1}>Web Developer</Title>
      </Center>
      <Container size={'md'} style={{ marginBottom: '400px' }}>
        <Text>Hey, ...</Text>

        <Text weight={200} size='xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius
          natus quos fugit sint, nulla, repudiandae accusamus reiciendis quia
          dolorum ullam earum aliquam tempora minus assumenda placeat dolor modi
          nostrum.
        </Text>
      </Container>
    </>
  )
}

const Project = () => {
  return (
    <>
      <Divider
        color={'dark'}
        size='xl'
        label={
          <Title order={2} style={{ fontSize: 40 }}>
            Projects
          </Title>
        }
        labelPosition='center'
        labelProps={{
          component: 'h2',
        }}
      />
      <Grid columns={12}>
        <Grid.Col xs={12} sm={12} md={4}>
          <Text weight={500} size='xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas a
          </Text>
        </Grid.Col>
        <Grid.Col xs={12} sm={12} md={4}>
          Powered by a Craft CMS back-end the website is easy to manage and
          update. There are several customizable content blocks that can be
          added and rearranged to make case studies be presented in a meaningful
          way.
        </Grid.Col>
        <Grid.Col xs={12} sm={12} md={4}>
          <Text size='lg' weight={500}>
            www.website.com
          </Text>
        </Grid.Col>
      </Grid>
      <Grid columns={12} grow>
        <Grid.Col span={8} sm={12} md={8}>
          <Image
            src='/images/Capture.JPG'
            alt='project image'
            width='100%'
            height='50%'
            layout='responsive'
            objectFit='contain'
          />
        </Grid.Col>

        <Grid.Col sm={12} md={4}>
          Case Studies A primary focus of the website is to showcase the brand
          design work that Studio Mega has delivered to their clients
        </Grid.Col>
      </Grid>
    </>
  )
}

const Contact = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <Text weight={500} style={{ fontSize: 30 }}>
        Lets Build Something Together
      </Text>
      <Text>
        feel free to reach out if you,re looking for a developer, have a
        question, or just want to connect.
      </Text>
    </div>
  )
}
