import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from 'components/Layout'
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Muhammad Sony Fauzi Freelance Web developer, Penulis, Gamer" />
        <meta name="keywords" content="web, developer, freelance" />
        <title>Arzivre</title>
      </Head>
        {Hero}
        {Project}
    </Layout>
  )
}

export default Home

const Hero = (
  <article className='container mx-auto px-4 min-h-[90vh] mt-10 lg:flex gap-8'>
    <div className=''>
      <Image
        src='/images/profile.jpg'
        alt='Potrait'
        width={2733}
        height={2734}
        placeholder='blur'
        blurDataURL='/images/profile.jpg'
      />
    </div>
    <header className=''>
      <h1 className='text-[calc(1em+8vh)] font-bold'>Muhammad Sony Fauzi</h1>
      <h2 className='text-[calc(1em+8vh)] font-thin'>Web Developer</h2>
    </header>
    <footer className='text-right lg:text-left'>
      <h3 className='text-2xl mb-1'>SOSIAL MEDIA</h3>
      <p className='text-slate-600'>Github</p>
      <h3 className='text-2xl mb-1 mt-3'>CONTACT</h3>
      <p className='text-slate-600'>sonyfauzi@outlook.co.id</p>
      <p className='text-slate-600'>0813 3205 6357</p>
    </footer>
  </article>
)

const Project = (
  <article className='container mx-auto px-4 min-h-screen my-10'>
    <h1 className='relative right-[25vw] text-5xl mb-5 text-right'>Project </h1>

    <main className='grid grid-cols-1  md:grid-cols-2 gap-4'>
      <div className='grid grid-cols-1  lg:grid-cols-2 gap-2 mr-4'>
        <div className='mb-5'>
          <h2 className='text-4xl mb-2'>Kopi Lokal</h2>
          <p>
            Web ini adalaah project sampingan saya untuk menulis lokasi warung
            kopi dan artikel tentang Kopi
          </p>
        </div>
        <div className='mb-5'>
          <h2 className='text-2xl mb-1'>URL</h2>
          <a href='https://kopilokal.com' className='hover:text-blue-600'>
            <p>kopilokal.com</p>
          </a>
          <h2 className='text-2xl mb-1 mt-4'>Teknologi</h2>
          <p>Nextjs</p>
          <p>Supabase</p>
        </div>
      </div>
      <div className='text-[0px]'>
        <Image
          src='/images/kopi-lokal.png'
          alt='Project Kopi Lokal'
          width={1235}
          height={585}
          placeholder='blur'
          blurDataURL='/images/kopi-lokal.png'
        />
      </div>
    </main>
  </article>
)
