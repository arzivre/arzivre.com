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
            className='mx-auto border-2 border-black'
            src='images/profile.webp'
            alt='Potrait Muhammad Sony Fauzi'
            width={450}
            height={450}
          />
        </picture>
        <div className='flex flex-col justify-between'>
          <h1 className=' text-right text-[calc(1em+5vw)] text-gray-50'>
            MUHAMMAD SONY FAUZI
          </h1>
          <h2 className='text-right font-mono text-[calc(1em+2vw)] text-[#f25f4c]'>
            Web Developer
            <span className='text-[#e53170]'>,</span> Penulis
          </h2>
        </div>
      </article>
    </section>
  )
}

const ProjectHouseOfJesho = () => {
  return (
    <div className='bg-[#0f0e17]'>
      <section
        className='container mx-auto mb-10 px-4 py-8 text-2xl text-gray-50
      md:my-10'
      >
        <div className='grid gap-x-4 md:grid-cols-2 lg:grid-cols-3'>
          <h2 className='mb-4 text-5xl md:mb-10 lg:mb-20'>Houseofjesho</h2>
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
    </div>
  )
}

const ProjectKopiLokal = () => {
  return (
    <section className='container mx-auto my-10 px-4 text-2xl text-slate-700 md:my-20'>
      <h2 className='py-20 text-[calc(1em+13vw)] text-gray-900 md:mb-10 lg:mb-20'>
        Kopi Lokal
      </h2>
      <div className='mt-4 grid grid-cols-1 gap-x-4 md:grid-cols-2'>
        <picture>
          <source srcSet='images/project/kopi-lokal.avif' type='image/avif' />
          <img
            src='images/project/kopi-lokal.webp'
            alt='Project Kopi Lokal'
            width={1235}
            height={585}
            className='mb-8 border-4 border-black md:mb-0'
          />
        </picture>
        <div
          className='grid grid-cols-1 justify-between 
        border-4 border-black bg-[#0f0e17] p-8 text-gray-600'
        >
          <p>
            <span className=' mb-2 text-rose-600 hover:underline'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://kopilokal.com'
              >
                kopilokal.com
              </a>
            </span>{' '}
            adalah project sampingan saya untuk menulis lokasi warung kopi dan
            artikel tentang Kopi.
          </p>
          <h4 className='mb-1 mt-2 text-gray-50'>Teknologi</h4>

          <ul
            className='flex flex-col justify-between 
            text-xl font-medium text-gray-600 md:flex-row'
          >
            <li>
              <p>ReactJS</p>
            </li>
            <li>
              <p>NextJS</p>
            </li>
            <li>
              <p>Typescript</p>
            </li>
            <li>
              <p>Supabase</p>
            </li>
            <li>
              <p>MDX</p>
            </li>
          </ul>
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
          className='container mx-auto my-4 
           px-4 text-[calc(1em+5vw)] text-black'
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
