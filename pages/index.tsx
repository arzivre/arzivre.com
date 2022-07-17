import type { NextPage } from 'next'
import Layout from 'components/Layout'
import Head from 'next/head'

const Hero = () => {
  return (
    <>
      <article className='container mx-auto mt-10 min-h-[90vh] gap-8 px-4 lg:flex'>
        <picture>
          <source srcSet='images/profile.avif' type='image/avif' />
          <img
            src='images/profile.webp'
            alt='Potrait Muhammad Sony Fauzi'
            width={800}
            height={800}
          />
        </picture>
        <section className='mb-4'>
          <h1 className='mb-4 text-[calc(1em+6vh)] font-bold'>
            Muhammad Sony Fauzi
          </h1>
          <h2 className='text-[calc(1em+5vh)] font-thin'>Web Developer,</h2>
          <h2 className='text-[calc(1em+5vh)] font-thin'>Penulis</h2>
        </section>
        <section className='whitespace-nowrap text-right lg:text-left'>
          <h3 className='mb-1 text-2xl'>Sosial Media</h3>
          <p className='text-xl'>
            <a
              href='https://twitter.com/arzivre'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </p>
          <p className='text-xl'>
            <a
              href='https://github.com/arzivre'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </p>
        </section>
      </article>
    </>
  )
}

const ProjectKopiLokal = () => {
  return (
    <section className='container mx-auto px-4 md:my-10'>
      <div className='grid md:grid-cols-2 md:gap-1 lg:grid-cols-3 lg:gap-40'>
        <h2 className='mb-4 text-4xl md:mb-10 lg:mb-20'>Kopi Lokal</h2>
        <p className='mb-4 text-lg md:mb-10'>
          Kopi Lokal adalah project sampingan saya untuk menulis lokasi warung
          kopi dan artikel tentang Kopi
        </p>
        <p className='mb-4 text-lg md:mb-10'>
          Web ini menggukan teknologi Supabase untuk menyimpan data dan file
        </p>
      </div>
      <div className='gap-4 md:flex'>
        <picture className='mb-4 border-gray-900 text-[0px] md:border-4'>
          <source srcSet='images/project/kopi-lokal.avif' type='image/avif' />
          <img
            src='images/project/kopi-lokal.webp'
            alt='Project Kopi Lokal'
            width={1235}
            height={585}
          />
        </picture>
        <div className='w-80'>
          <div className='mb-5 flex flex-col gap-4 space-y-8 md:block'>
            <div>
              <h2 className='mb-1 text-2xl'>URL</h2>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://kopilokal.com'
                className='text-lg hover:text-blue-600'
              >
                kopilokal.com
              </a>
            </div>
            <div>
              <h2 className='mb-1 mt-4 text-2xl'>Teknologi</h2>
              <p className='text-md'>ReactJS</p>
              <p className='text-md'>NextJS</p>
              <p className='text-md'>Supabase</p>
              <p className='text-md'>MDX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProjectHouseOfJesho = () => {
  return (
    <section className='container mx-auto px-4 md:my-10'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        <h2 className='mb-4 text-4xl md:mb-10 lg:mb-20'>Houseofjesho</h2>
        <p className='mb-4 text-lg md:mb-10'>
          Houseofjesho adalah perusahaan mebel yang berbasis di Semarang,
          Indonesia.
        </p>
      </div>
      <div className='gap-4 md:flex'>
        <picture className='mb-4 border-gray-900 text-[0px] md:border-4'>
          <source
            srcSet='images/project/house-of-jesho.avif'
            type='image/avif'
          />
          <img
            src='images/project/house-of-jesho.webp'
            alt='Project Kopi Lokal'
            width={1235}
            height={585}
          />
        </picture>
        <div className='w-80'>
          <div className='mb-5 flex flex-col space-y-8 md:block md:justify-between'>
            <div>
              <h2 className='mb-1 text-2xl'>URL</h2>
              <a
                href='https://houseofjesho.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg hover:text-blue-600'
              >
                houseofjesho.com
              </a>
            </div>
            <div>
              <h2 className='mb-1 text-2xl md:mt-4'>Teknologi</h2>
              <p className='text-md'>ReactJS</p>
              <p className='text-md'>NextJS</p>
              <p className='text-md'>Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <meta
          name='description'
          content='Muhammad Sony Fauzi Freelance Web developer, Penulis, Gamer'
        />

        <title>Arzivre</title>
      </Head>
      <Hero />
      <h2 className='relative mb-4 px-4 text-[calc(1em+8vh)] md:left-20'>
        Projects
      </h2>
      <ProjectHouseOfJesho />
      <ProjectKopiLokal />
    </Layout>
  )
}

export default Home
