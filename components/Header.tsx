import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'

const Header = () => {
  return (
    <Popover className='relative container w-full max-w-8xl mx-auto px-4'>
      <div
        className='h-14 flex justify-between md:justify-start items-center 
           md:space-x-10'
      >
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <Link href='/'>
            <a>
              <h1 className='font-semibold text-xl text-gray-900'>Arzivre</h1>
            </a>
          </Link>
        </div>
        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          <Link href='/'>
            <a
              className='border-b-4 border-slate-600 text-gray-900
              whitespace-nowrap text-base font-medium hover:border-gray-300'
            >
              Home
            </a>
          </Link>
          <Link href='/blogs'>
            <a
              className='ml-8 whitespace-nowrap 
              text-base font-medium text-gray-400 hover:text-gray-900'
            >
              Blogs
            </a>
          </Link>
          <Link href='/contact'>
            <a
              className='ml-8 whitespace-nowrap 
              text-base font-medium text-gray-400 hover:text-gray-900'
            >
              Contact
            </a>
          </Link>
        </div>
        <div className='-mr-2 -my-2 md:hidden'>
          <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
      </div>

      {mobile}
    </Popover>
  )
}

export default Header

const mobile = (
  <Transition
    as={Fragment}
    enter='duration-200 ease-out'
    enterFrom='opacity-0 scale-95'
    enterTo='opacity-100 scale-100'
    leave='duration-100 ease-in'
    leaveFrom='opacity-100 scale-100'
    leaveTo='opacity-0 scale-95'
  >
    <Popover.Panel
      focus
      className='z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
    >
      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
        <div className='pt-5 pb-6 px-5'>
          <div className='flex items-center justify-between'>
            <div className='-mr-2'>
              <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Tutup menu</span>
                <XIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className='py-6 px-5 space-y-6'>
          <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
            <Link href='/'>
              <a className='text-base font-medium text-gray-900 hover:text-gray-700'>
                Home
              </a>
            </Link>
            <Link href='/blogs'>
              <a className='text-base font-medium text-gray-900 hover:text-gray-700'>
                Blog
              </a>
            </Link>
            <Link href='/contact'>
              <a className='text-base font-medium text-gray-900 hover:text-gray-700'>
                Contact
              </a>
            </Link>
         
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Transition>
)
