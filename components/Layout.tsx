import Head from 'next/head'
import Link from 'next/link'

const desktop = (
  <section
    className='hidden h-14 items-center justify-center 
    sm:hidden md:flex md:justify-start md:space-x-10'
  >
    <Link href='/'>
      <a>
        <h1 className='text-3xl font-semibold text-gray-50 hover:underline'>
          Arzivre
        </h1>
      </a>
    </Link>
    <div
      className='hidden items-center justify-end 
      sm:hidden md:flex md:flex-1 lg:w-0'
    >
      <Link href='/'>
        <a
          className='whitespace-nowrap rounded-sm p-2 font-medium text-gray-50 
        hover:bg-cyan-400 hover:text-blue-900'
        >
          Home
        </a>
      </Link>
      <Link href='/blogs'>
        <a
          className='ml-8 whitespace-nowrap rounded-sm p-2 font-medium text-gray-50 
        hover:bg-cyan-400 hover:text-blue-900'
        >
          Blog
        </a>
      </Link>
      <Link href='/contact'>
        <a
          className='ml-8 whitespace-nowrap rounded-sm p-2 font-medium text-gray-50 
        hover:bg-cyan-400 hover:text-blue-900'
        >
          Contact
        </a>
      </Link>
    </div>
  </section>
)

const mobile = (
  <section className='flex items-baseline justify-between md:hidden'>
    <Link href='/'>
      <a>
        <h1 className='text-xl font-semibold text-gray-50 hover:underline'>
          Arzivre
        </h1>
      </a>
    </Link>
    <div className='flex items-center justify-end md:hidden md:flex-1 lg:w-0'>
      <Link href='/'>
        <a className='whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-50 hover:bg-blue-200 hover:text-blue-900'>
          Home
        </a>
      </Link>
      <Link href='/blogs'>
        <a className='ml-8 whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-50 hover:bg-blue-200 hover:text-blue-900'>
          Blog
        </a>
      </Link>
      <Link href='/contact'>
        <a className='ml-8 whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-50 hover:bg-blue-200 hover:text-blue-900'>
          Contact
        </a>
      </Link>
    </div>
  </section>
)

const Header = () => {
  return (
    <header
      className='sticky top-0 z-10 
      bg-[#0f0e17] text-xl'
    >
      <nav className='container mx-auto px-4'>
        {desktop}
        {mobile}
      </nav>
    </header>
  )
}

const Footer = () => {
  return (
    <>
      <footer
        className='mx-auto mb-8 mt-4 grid max-w-7xl grid-cols-[1fr_2fr]
        border-t-2 border-black p-4 text-xl '
      >
        <div className='grid grid-cols-1 space-y-4'>
          <Link href='/'>
            <a className='hover:underline'>Home</a>
          </Link>
          <Link href='/blogs'>
            <a className='hover:underline'>Blog</a>
          </Link>
          <Link href='/contact'>
            <a className='hover:underline'>Contact</a>
          </Link>
        </div>

        <div>
          <section className='grid grid-cols-1 space-y-4'>
            <p className='text-slate-900'>
              <a
                href='https://twitter.com/arzivre'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Twitter
              </a>
            </p>
            <p className='text-slate-900'>
              <a
                href='https://github.com/arzivre'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Github
              </a>
            </p>
          </section>
        </div>
      </footer>
    </>
  )
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Arzivre</title>
        <meta
          name='keywords'
          content='web developer, freelance web developer, web murah'
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
