import { Fragment, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline'
import FlyoutMenu from './FlyoutMenu'

const homelink = [{ name: 'Home', href: '/', current: true }]

const dropdown = [
  {
    name: 'Demolition',
    href: '/demolition',
  },
  {
    name: 'Land Clearing and Excavation',
    href: '/land-clearing-excavation',
  },
  {
    name: 'Debris CLeanup',
    href: '/debris-cleanup',
  },
]

const navigation = {
  categories: [
    {
      name: 'Demolition, Site Preparation & Cleanup',
      programs: [
        {
          name: 'Demolition',
          href: '/demolition',
        },
        {
          name: 'Land Clearing and Excavation',
          href: '/land-clearing-excavation',
        },
        {
          name: 'Debris CLeanup',
          href: '/debris-cleanup',
        },
      ],
    },
  ],
  pages: [
    { name: 'Request a Free Estimate', href: '/request-free-estimate' },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'Reviews', href: '/reviews', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const router = useRouter()
  const [pathName, setPathName] = useState(router.pathname)

  const newPathName = () => {
    setPathName(router.pathname)
  }

  return (
    <div className='bg-white source-styles fixed top- z-10  w-full'>
      <div>
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 lg:hidden'
            onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'>
              <div className='relative w-full bg-black shadow-xl pb-12 flex flex-col overflow-y-auto'>
                <div className='px-4 pt-5 pb-2 flex'>
                  <button
                    type='button'
                    className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400 dark:text-gray-400'
                    onClick={() => setMobileMenuOpen(false)}>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}
                <div className='flex flex-col mx-4 py-36 items-center justify-center'>
                  <div className='flex items-center'>
                    {homelink.map((item) => (
                      <div key={item.name} className='group relative'>
                        <Link href={item.href}>
                          <a
                            className={
                              router.pathname === '/'
                                ? 'font-medium block items-center justify-center rounded-md text-white bg-blue-400 hover:text-gray-300 hover:bg-blue-500 px-8 py-2 mb-2'
                                : 'font-base flex items-center justify-center font-medium rounded-md text-white hover:text-gray-300 hover:bg-blue-400 px-8 py-2 mb-0'
                            }
                            onClick={newPathName}
                            pathname={pathName}>
                            <span
                              className='absolute z-10 inset-0 group-hover:block'
                              aria-hidden='true'
                            />
                            {item.name}
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>

                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open
                              ? 'text-white bg-black'
                              : 'text-gray-300 group-hover:block',
                            'group bg-black  rounded-md my-1 py-1 px-2 inline-flex items-center text-base font-medium hover:text-gray-300 focus:outline-none'
                          )}>
                          <span className='text-base'>
                            Demolition, Site Preparation & Cleanup
                          </span>
                          <ChevronDownIcon
                            className={classNames(
                              open
                                ? 'text-gray-300 rotate-180 duration-500'
                                : 'text-white',
                              'mx-2 h-5 w-5 group-hover:text-gray-300 transform transition-all duration-500'
                            )}
                            aria-hidden='true'
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='opacity-0 translate-y-1'
                          enterTo='opacity-100 translate-y-0'
                          leave='transition ease-in duration-150'
                          leaveFrom='opacity-100 translate-y-0'
                          leaveTo='opacity-0 translate-y-1'>
                          <Popover.Panel className='relative z-10 left-1/2 transform -translate-x-1/2 mt-1 px-4 w-screen max-w-xs sm:px-0'>
                            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                              <div className='relative grid gap-3 bg-black px-5 py-2 sm:gap-8 sm:p-4'>
                                {dropdown.map((item) => (
                                  <Link key={item.name} href={item.href}>
                                    <a
                                      className={
                                        router.pathname === item.href
                                          ? '-m-3 my-1 px-2 py-1 block rounded-md bg-blue-400 hover:bg-blue-500 transition ease-in-out duration-150'
                                          : '-m-3 p-2 block rounded-md hover:bg-blue-400 transition ease-in-out duration-150'
                                      }
                                      onClick={newPathName}
                                      pathname={pathName}>
                                      <p className='text-base font-medium text-white text-center'>
                                        {item.name}
                                      </p>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <div className='mt-1 py-2 px-4 space-y-6 '>
                    {navigation.pages.map((page) => (
                      <div key={page.name} className='flow-root'>
                        <Link href={page.href}>
                          <a
                            className={
                              router.pathname === page.href
                                ? '-m-2 p-2 block font-medium text-white text-center bg-blue-400 hover:bg-blue-500 rounded-md'
                                : '-m-2 p-2 block font-medium text-white text-center hover:bg-blue-400 rounded-md'
                            }
                            onClick={newPathName}
                            pathname={pathName}>
                            {page.name}
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        {/* Large Nav */}
        {/* Top Nav */}
        <header className='hidden lg:w-full lg:flex justify-around  py-2 bg-white lg:fixed lg:top-0 z-10'>
          <div className='flex flex-col items-center justify-center'>
            <Link href='/request-free-estimate'>
              <a>
                <button
                  type='button'
                  className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium shadow-black shadow-md text-white bg-blue-400 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  Request a Free Estimate
                </button>
              </a>
            </Link>

            <p className='pt-2'>Silsbee, TX</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <Link href='/'>
              <a>
                <span className='sr-only'>Ultra Demolition</span>
                <Image
                  height={100}
                  width={190}
                  className=''
                  src='/images/logo.png'
                  alt='Ultra Demolition'
                />
              </a>
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center font-bold text-xl'>
            <a
              href='tel:4098126292'
              className='hover:text-blue-400'
              target='_blank'
              rel='noreferrer'>
              <p className='py-2'>(409) 812-6292</p>
            </a>
            <a href='tel:4095042241' className='hover:text-blue-400'>
              <p>(409) 504-2241</p>
            </a>
          </div>
        </header>
        {/* Secondary Nav */}
        <header className='relative z-10'>
          <nav aria-label='Top'>
            {/* Secondary navigation */}
            <div className='bg-white lg:bg-black shadow-xl lg:fixed lg:top-28 lg:w-full'>
              <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='h-16 flex items-center justify-center'>
                  <div className='hidden h-full lg:flex'>
                    <div className='flex items-center'>
                      {homelink.map((item) => (
                        <div key={item.name} className='group relative'>
                          <Link href={item.href}>
                            <a
                              className={
                                router.pathname === item.href
                                  ? 'font-base flex items-center justify-center font-medium rounded-md text-white bg-blue-400 hover:text-gray-300 hover:bg-blue-500 py-2 px-2'
                                  : 'font-base flex items-center justify-center font-medium rounded-md text-white hover:text-gray-300 hover:bg-blue-400 py-2 px-2'
                              }
                              onClick={newPathName}
                              pathname={pathName}>
                              <span
                                className='absolute z-10 inset-0 group-hover:block'
                                aria-hidden='true'
                              />
                              {item.name}
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>

                    {/* Dropdown */}
                    <div className='flex items-center justify-center px-2'>
                      <FlyoutMenu />
                      {navigation.pages.map((page) => (
                        <Link key={page.name} href={page.href}>
                          <a
                            className={
                              router.pathname === page.href
                                ? 'flex items-center font-medium text-white bg-blue-400 hover:bg-blue-500 rounded-md dark:text-gray-50 px-2 py-2'
                                : 'flex items-center font-medium text-white hover:bg-blue-400 rounded-md dark:text-gray-50 px-2 py-2'
                            }
                            onClick={newPathName}
                            pathname={pathName}>
                            {page.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className='flex-1 flex items-center lg:hidden'>
                    <button
                      type='button'
                      className='-ml-2 bg-white p-2 rounded-md text-gray-400'
                      onClick={() => setMobileMenuOpen(true)}>
                      <span className='sr-only'>Open menu</span>
                      <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    {/* Logo (lg-) */}
                    <div className='mx-auto mt-4'>
                      <Link href='/'>
                        <a className='lg:hidden'>
                          <span className='sr-only'>Workflow</span>
                          <Image
                            height={90}
                            width={190}
                            src='/images/logo.png'
                            alt='Ultra Demolition'
                            className=''
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <header className='lg:hidden flex justify-around mx-2 pt-5 mb-5 bg-white'>
            <div>
              <a href='tel:4098126292'>
                <button
                  type='button'
                  className='inline-flex items-center px-8 py-2 border border-transparent text-base font-medium shadow-black shadow-md text-white bg-blue-400 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  (409) 812-6292
                </button>
              </a>
            </div>
            <div>
              <Link href='/request-free-estimate'>
                <a>
                  <button
                    type='button'
                    className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium shadow-black shadow-md text-white bg-blue-400 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Request a Free Estimate
                  </button>
                </a>
              </Link>
            </div>
          </header>
        </header>
      </div>
    </div>
  )
}
