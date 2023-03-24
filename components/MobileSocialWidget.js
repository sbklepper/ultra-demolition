import { Dialog, Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { FaStar, FaFacebookMessenger, FaSms } from 'react-icons/fa'
import { BiCalculator, BiShareAlt } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { Fragment, useState } from 'react'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
} from 'react-share'

const navigation = {
  items: [
    { name: 'Text Us', href: 'sms:14098126292', icon: <FaSms /> },
    {
      name: 'Email Us',
      href: 'mailto:ultrademolitiontx@gmail.com',
      icon: <HiOutlineMail />,
    },
    { name: 'Reviews', href: '/reviews', icon: <FaStar /> },
    {
      name: 'Estimate',
      href: '/request-free-estimate',
      icon: <BiCalculator />,
    },
    {
      name: 'Message Us',
      href: 'http://m.me/621437358480749',
      icon: <FaFacebookMessenger />,
    },
    { name: 'Share Us', href: '' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MobileSocialWidget() {
  const [mobileSocialMenuOpen, setMobileSocialMenuOpen] = useState(false)

  // Share modal
  const [shareOpen, setShareOpen] = useState(false)

  function closeShareModal() {
    setShareOpen(false)
  }

  function openShareModal() {
    setShareOpen(true)
  }

  return (
    <>
      <div className='mobile-social-media-bar p-6 md:hidden'>
        {mobileSocialMenuOpen ? (
          <button
            id='social-close'
            type='button'
            className='inline-flex items-center p-3 border border-transparent rounded-full shadow-black shadow-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            onClick={() => setMobileSocialMenuOpen(false)}>
            <span className='sr-only'>Close menu</span>
            <XIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        ) : (
          <button
            type='button'
            onClick={() => setMobileSocialMenuOpen(true)}
            className='inline-flex items-center p-3 border border-transparent rounded-full shadow-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            <PlusSmIconOutline className='h-6 w-6' aria-hidden='true' />
          </button>
        )}
      </div>

      <div>
        {/* Mobile social menu */}
        <Transition.Root show={mobileSocialMenuOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 lg:hidden'
            onClose={setMobileSocialMenuOpen}>
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
              enterFrom='translate-y-full'
              enterTo='translate-y-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-y-0'
              leaveTo='translate-y-full'>
              <div className='relative w-full bg-white  shadow-xl pb-12 flex flex-col overflow-y-auto items-center justify-center'>
                <div className='py-6 px-4 space-y-10 mx-auto'>
                  {navigation.items.map((item) => (
                    <div key={item.name} className='flow-root'>
                      <a
                        href={item.href}
                        className='-m-2 p-2 block text-3xl text-blue-500 hover:text-blue-600 hover:scale-110'>
                        {item.icon}
                      </a>
                    </div>
                  ))}
                </div>
                <div className=''>
                  <a
                    onClick={openShareModal}
                    className='-m-2 block text-3xl text-blue-500 cursor-pointer hover:text-blue-600 hover:scale-110'>
                    <BiShareAlt />
                  </a>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <>
          <Transition appear show={shareOpen} as={Fragment}>
            <Dialog
              as='div'
              className='fixed inset-0 share-modal overflow-y-auto'
              onClose={closeShareModal}>
              <div className='min-h-screen px-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'>
                  <Dialog.Overlay className='fixed inset-0 bg-gray-300 opacity-70' />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className='inline-block h-screen align-middle'
                  aria-hidden='true'>
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'>
                  <div className='inline-block w-full max-w-xs p-6 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                    <div className='flex flex-col justify-center items-center'>
                      <a
                        href='mailto:?Subject=Reviews%20%7C%20Ultra%20Demolition&body=Check out this site: https://ultra-demolition-sepia.vercel.app/reviews'
                        target='_blank'
                        rel='noreferrer'>
                        <EmailIcon
                          round={true}
                          size={45}
                          url={'https://ultra-demolition-sepia.vercel.app/'}
                        />
                      </a>
                      <a
                        href='https://www.facebook.com/sharer/sharer.php?u=https://ultra-demolition-sepia.vercel.app/reviews'
                        target='_blank'
                        rel='noreferrer'>
                        <FacebookIcon
                          round={true}
                          size={45}
                          url={'https://ultra-demolition-sepia.vercel.app/'}
                        />
                      </a>
                      <a
                        href='http://tumblr.com/share/link?url=https://ultra-demolition-sepia.vercel.app&name=Reviews%20%7C%20Ultra%20Demolition'
                        target='_blank'
                        rel='noreferrer'>
                        <TumblrIcon
                          round={true}
                          size={45}
                          url={'https://ultra-demolition-sepia.vercel.app/'}
                        />
                      </a>
                      <a
                        href='http://www.linkedin.com/shareArticle?mini=true&url=https://ultra-demolition-sepia.vercel.app/&title=Reviews%20%7C%20Ultra%20Demolition'
                        target='_blank'
                        rel='noreferrer'>
                        <LinkedinIcon
                          round={true}
                          size={45}
                          url={'https://ultra-demolition-sepia.vercel.app/'}
                        />
                      </a>
                      <a
                        href='https://twitter.com/intent/tweet?text=https://ultra-demolition-sepia.vercel.app/'
                        target='_blank'
                        rel='noreferrer'>
                        <TwitterIcon
                          round={true}
                          size={45}
                          url={'https://ultra-demolition-sepia.vercel.app/'}
                        />
                      </a>
                      <a
                        href='http://www.reddit.com/submit?url=https://ultra-demolition-sepia.vercel.app/&title=Reviews%20%7C%20Ultra%20Demolition&text=Reviews%20%7C%20Ultra%20Demolition'
                        target='_blank'
                        rel='noreferrer'>
                        <RedditIcon
                          round={true}
                          size={45}
                          url={'https://ultra-demolition-sepia.vercel.app/'}
                        />
                      </a>
                      <a
                        href='http://pinterest.com/pin/create/button/?url=https://ultra-demolition-sepia.vercel.app/&description=Reviews%20%7C%20Ultra%20Demolition'
                        target='_blank'
                        rel='noreferrer'>
                        <PinterestIcon
                          round={true}
                          size={45}
                          url={'https://ultra-demolition-sepia.vercel.app/'}
                        />
                      </a>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      </div>
    </>
  )
}
