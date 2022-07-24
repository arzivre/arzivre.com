import type { NextPage } from 'next'
import Layout from 'components/Layout'
import Head from 'next/head'

const Hero = () => {
  return (
    <section className='bg-[#0f0e17]'>
      <article
        className='mx-auto grid max-w-7xl grid-cols-1 rounded  
         p-4 py-10 px-4  md:grid-cols-2'
      >
        <picture className=''>
          <source srcSet='images/profile.avif' type='image/avif' />
          <img
            className='border border-black'
            src='images/profile.webp'
            alt='Potrait Muhammad Sony Fauzi'
            width={800}
            height={800}
          />
        </picture>
        <div className='flex flex-col justify-between'>
          <h1 className=' text-right text-[calc(1em+5vw)] text-gray-50'>
            MUHAMMAD SONY FAUZI
          </h1>
          <h2 className='text-right font-mono text-[calc(1em+2vw)] text-[#a7a9be]'>
            Web Developer, Penulis
          </h2>
        </div>
      </article>
    </section>
  )
}

const ProjectHouseOfJesho = () => {
  return (
    <section
      className='container mx-auto mb-10 bg-[#0f0e17] px-4 py-8 text-2xl  text-gray-50
      md:my-10 md:px-8'
    >
      <div className='grid gap-x-4 md:grid-cols-2 lg:grid-cols-3'>
        <h2 className='mb-4 text-4xl md:mb-10 lg:mb-20'>Houseofjesho</h2>
        <p className='mb-4 text-[#a7a9be] md:mb-10'>
          Houseofjesho adalah perusahaan mebel yang berbasis di Semarang,
          Indonesia.
        </p>
        <p className='mb-4 text-[#a7a9be] md:mb-10'>
          <span className='text-orange-500'>Xendit </span>
          sebagai payment gateway yang menerima berbagai metode pembayaran.
        </p>
      </div>
      <div className='gap-4 md:flex'>
        <picture className=' text-[0px]'>
          <source
            srcSet='images/project/house-of-jesho.avif'
            type='image/avif'
          />
          <img
            src='images/project/house-of-jesho.webp'
            alt='Project Kopi Lokal'
            width={1235}
            height={585}
            className='mb-8 border-4 border-black md:mb-0'
          />
        </picture>
        <div className='md:w-80'>
          <div className='flex flex-col justify-between'>
            <div className='mb-4 '>
              <h2 className='mb-4 '>URL</h2>
              <a
                href='https://houseofjesho.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl text-orange-500 hover:text-blue-600'
              >
                houseofjesho.com
              </a>
            </div>
            <div className='text-xl text-[#a7a9be]'>
              <h2 className='mb-4 text-gray-50 md:mt-4'>Teknologi</h2>
              <p>ReactJS</p>
              <p>NextJS</p>
              <p>Typescript</p>
              <p>Firebase</p>
              <p>Xendit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProjectKopiLokal = () => {
  return (
    <section className='container mx-auto mb-10 px-4 text-2xl text-slate-700 md:my-10'>
      <div className='grid gap-x-4 md:grid-cols-2 lg:grid-cols-3'>
        <h2 className='mb-4 text-4xl md:mb-10 lg:mb-20 text-slate-900'>Kopi Lokal</h2>
        <p className='mb-4 md:mb-10'>
          Kopi Lokal adalah project sampingan saya untuk menulis lokasi warung
          kopi dan artikel tentang Kopi
        </p>
        <p className='mb-4 md:mb-10'>
          Web ini menggukan teknologi Supabase untuk menyimpan data dan file
        </p>
      </div>
      <div className='gap-4 md:flex'>
        <picture className='text-[0px]'>
          <source srcSet='images/project/kopi-lokal.avif' type='image/avif' />
          <img
            src='images/project/kopi-lokal.webp'
            alt='Project Kopi Lokal'
            width={1235}
            height={585}
            className='mb-8 border-4 border-black md:mb-0'
          />
        </picture>
        <div className='md:w-80'>
          <div className='flex flex-col justify-between'>
            <div className='mb-4'>
              <h2 className='mb-4'>URL</h2>
              <p className='text-blue-600 hover:underline'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://kopilokal.com'
                >
                  kopilokal.com
                </a>
              </p>
            </div>
            <div>
              <h2 className='mb-4 text-gray-900 md:mt-4'>Teknologi</h2>
              <p>ReactJS</p>
              <p>NextJS</p>
              <p>Typescript</p>
              <p>Supabase</p>
              <p>MDX</p>
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
      <main>
        <Hero />
        <h2
          className='container mx-auto mb-4 
           px-4 text-[calc(1em+8vw)] text-black'
        >
          PROJECTS
        </h2>
        <ProjectHouseOfJesho />
        <ProjectKopiLokal />
      </main>
    </Layout>
  )
}

export default Home
