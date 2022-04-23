import type { NextPage } from 'next'
import Image from 'next/image'
import { Center, Container, Divider, Grid, Text, Title } from '@mantine/core'

const Home: NextPage = () => {
  return (
    <main style={{ background: '#100e17' }}>
      <Container size={'xl'}>
        <Hero />
        <Project />
      </Container>
    </main>
  )
}

export default Home

const Hero = () => {
  return (
    <article
      style={{ margin: '0 auto', paddingTop: '200px', paddingBottom: '200px' }}
    >
      <Text
        size='xl'
        weight={600}
        variant='gradient'
        gradient={{ from: 'blue', to: 'teal', deg: 45 }}
      >
        Saya Muhammad Sony Fauzi
      </Text>

      <Text
        style={{
          fontSize: 'calc(25px + (70 - 25) * ((100vw - 300px) / (1600 - 300)))',
        }}
      >
        Freelance Web developer dan Penulis. Saya suka main game dan terkadang
        membaca buku.
      </Text>
    </article>
  )
}

const Project = () => {
  return (
    <>
      <Title order={2} style={{ fontSize: 40 }}>
        Projects
      </Title>

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
