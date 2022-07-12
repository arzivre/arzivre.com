import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from 'components/Layout'
import Head from 'next/head'

const Hero = () => {
  return (
    <>
      <article className='container mx-auto px-4 min-h-[90vh] mt-10 lg:flex gap-8'>
        <div>
          <Image
            src='/images/profile.jpg'
            alt='Potrait'
            width={2733}
            height={2734}
            placeholder='blur'
            blurDataURL='/images/profile.jpg'
          />
        </div>
        <section className='mb-4'>
          <h1 className='text-[calc(1em+6vh)] font-bold mb-4'>
            Muhammad Sony Fauzi
          </h1>
          <h2 className='text-[calc(1em+5vh)] font-thin'>Web Developer,</h2>
          <h2 className='text-[calc(1em+5vh)] font-thin'>Penulis</h2>
        </section>
        <section className='whitespace-nowrap text-right lg:text-left'>
          <h3 className='text-2xl mb-1'>Sosial Media</h3>
          <p>
            <a
              href='https://twitter.com/arzivre'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </p>
          <p>
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
        <h2 className='text-4xl mb-4 md:mb-10 lg:mb-20'>Kopi Lokal</h2>
        <p className='mb-4 md:mb-10'>
          Kopi Lokal adalah project sampingan saya untuk menulis lokasi warung
          kopi dan artikel tentang Kopi
        </p>
        <p className='mb-4 md:mb-10'>
          Web ini menggukan teknologi Supabase untuk menyimpan data dan file
        </p>
      </div>
      <div className='md:flex gap-4'>
        <div className='mb-4 text-[0px] border-4 border-gray-900'>
          <Image
            src='/images/kopi-lokal.png'
            alt='Project Kopi Lokal'
            width={1235}
            height={585}
            placeholder='blur'
            blurDataURL='/images/kopi-lokal.png'
          />
        </div>
        <div className='w-80'>
          <div className='mb-5 flex justify-between gap-4 md:block'>
            <div>
              <h2 className='text-2xl mb-1'>URL</h2>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://kopilokal.com'
                className='hover:text-blue-600'
              >
                kopilokal.com
              </a>
            </div>
            <div>
              <h2 className='text-2xl mb-1 mt-4'>Teknologi</h2>
              <p>ReactJS</p>
              <p>NextJS</p>
              <p>Supabase</p>
              <p>MDX</p>
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
        <h2 className='text-4xl mb-4 md:mb-10 lg:mb-20'>Houseofjesho</h2>
        <p className='mb-4 md:mb-10'>
          Houseofjesho adalah perusahaan mebel yang berbasis di Semarang,
          Indonesia.
        </p>
      </div>
      <div className='md:flex gap-4'>
        <div className='mb-4 text-[0px] border-4 border-gray-900'>
          <Image
            src='/images/house-of-jesho.png'
            alt='Project Kopi Lokal'
            width={1235}
            height={585}
            placeholder='blur'
            blurDataURL='/images/house-of-jesho.png'
          />
        </div>
        <div className='w-80'>
          <div className='mb-5 flex justify-between gap-4 md:block'>
            <div>
              <h2 className='text-2xl mb-1'>URL</h2>
              <a
                href='https://houseofjesho.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-600'
              >
                houseofjesho.com
              </a>
            </div>
            <div>
              <h2 className='text-2xl mb-1 md:mt-4'>Teknologi</h2>
              <p>ReactJS</p>
              <p>NextJS</p>
              <p>Firebase</p>
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
        <meta name='keywords' content='web, developer, freelance' />
        <title>Arzivre</title>
      </Head>
      <Hero />
      <h2 className='relative md:left-20 px-4 mb-4 text-[calc(1em+8vh)]'>
        Projects
      </h2>
      <ProjectKopiLokal />
      <ProjectHouseOfJesho />
    </Layout>
  )
}

export default Home
