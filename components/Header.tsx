import Link from 'next/link'

const desktop = (
  <section
    className='hidden h-14 items-center justify-center 
    sm:hidden md:flex md:justify-start md:space-x-10'
  >
    <Link href='/'>
      <a>
        <h1 className='text-xl font-semibold text-gray-900 hover:underline'>
          Arzivre
        </h1>
      </a>
    </Link>
    <div
      className='hidden items-center justify-end 
      sm:hidden md:flex md:flex-1 lg:w-0'
    >
      <Link href='/'>
        <a className='whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900'>
          Home
        </a>
      </Link>
      <Link href='/blogs'>
        <a className='ml-8 whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900'>
          Blog
        </a>
      </Link>
      <Link href='/contact'>
        <a className='ml-8 whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900'>
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
        <h1 className='text-xl font-semibold text-gray-900 hover:underline'>
          Arzivre
        </h1>
      </a>
    </Link>
    <div className='flex items-center justify-end md:hidden md:flex-1 lg:w-0'>
      <Link href='/'>
        <a className='whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900'>
          Home
        </a>
      </Link>
      <Link href='/blogs'>
        <a className='ml-8 whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900'>
          Blog
        </a>
      </Link>
      <Link href='/contact'>
        <a className='ml-8 whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900'>
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
      border border-gray-100 
      bg-gray-50 bg-opacity-10 bg-clip-padding  
      backdrop-blur-sm backdrop-filter 
      hover:shadow-md'
    >
      <nav className='container mx-auto px-4'>
        {desktop}
        {mobile}
      </nav>
    </header>
  )
}

export default Header
