import { Grid, Skeleton, Container } from '@mantine/core'
import { NextPage } from 'next'
import Image from 'next/image'

const child = <Skeleton height={140} radius='md' animate={false} />

const Project: NextPage = () => {
  return (
    <Container my='md'>
      <Grid>
        <Grid.Col xs={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere
          laudantium reprehenderit dolorum corporis, unde nulla autem voluptas
          quidem officiis inventore nostrum ab totam maxime ipsam beatae iste,
          omnis optio.
        </Grid.Col>
        <Grid.Col xs={8}>
          <Image
            src='/images/Capture.JPG'
            alt='project image'
            width='100%'
            height='50%'
            layout='responsive'
            objectFit='contain'
          />
        </Grid.Col>
        <Grid.Col xs={8}>
          <Image
            src='/images/Capture.JPG'
            alt='project image'
            width='100%'
            height='50%'
            layout='responsive'
            objectFit='contain'
          />
        </Grid.Col>
        <Grid.Col xs={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum
          magnam, laudantium excepturi libero tenetur placeat beatae et eos modi
          minima possimus itaque eius quia, obcaecati maiores eaque ad illo.
        </Grid.Col>
        <Grid.Col xs={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere
          laudantium reprehenderit dolorum corporis, unde nulla autem voluptas
          quidem officiis inventore nostrum ab totam maxime ipsam beatae iste,
          omnis optio.
        </Grid.Col>
        <Grid.Col xs={8}>
          <Image
            src='/images/Capture.JPG'
            alt='project image'
            width='100%'
            height='50%'
            layout='responsive'
            objectFit='contain'
          />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
export default Project
