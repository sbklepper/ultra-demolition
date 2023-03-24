import { Fragment, useRef, useState, useEffect } from 'react'
import { Popover, Transition, Dialog } from '@headlessui/react'
import { FaStar, FaFacebookMessenger } from 'react-icons/fa'
import { BiCalculator, BiShareAlt } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { XIcon } from '@heroicons/react/solid'
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
} from 'react-share'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SocialWidget() {
  const buttonRef = useRef(null)
  const buttonRef2 = useRef(null)
  const buttonRef3 = useRef(null)
  const buttonRef4 = useRef(null)
  const buttonRef5 = useRef(null)
  const [openState, setOpenState] = useState(false)
  const [openState2, setOpenState2] = useState(false)
  const [openState3, setOpenState3] = useState(false)
  const [openState4, setOpenState4] = useState(false)
  const [openState5, setOpenState5] = useState(false)

  // Share modal
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  let timeout // NodeJS.Timeout
  const timeoutDuration = 400

  const toggleMenu = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState)
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click() // eslint-disable-line
  }
  const toggleMenu2 = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState2((openState2) => !openState2)
    // toggle the menu by clicking on buttonRef
    buttonRef2?.current?.click() // eslint-disable-line
  }
  const toggleMenu3 = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState3((openState3) => !openState3)
    // toggle the menu by clicking on buttonRef
    buttonRef3?.current?.click() // eslint-disable-line
  }
  const toggleMenu4 = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState4((openState4) => !openState4)
    // toggle the menu by clicking on buttonRef
    buttonRef4?.current?.click() // eslint-disable-line
  }
  const toggleMenu5 = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState5((openState5) => !openState5)
    // toggle the menu by clicking on buttonRef
    buttonRef5?.current?.click() // eslint-disable-line
  }

  // Open the menu after a delay of timeoutDuration
  const onHover = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === 'onMouseEnter') ||
      (open && openState && action === 'onMouseLeave')
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  // Open the menu after a delay of timeoutDuration
  const onHover2 = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState2 && action === 'onMouseEnter') ||
      (open && openState2 && action === 'onMouseLeave')
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu2(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  // Open the menu after a delay of timeoutDuration
  const onHover3 = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState3 && action === 'onMouseEnter') ||
      (open && openState3 && action === 'onMouseLeave')
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu3(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  // Open the menu after a delay of timeoutDuration
  const onHover4 = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState4 && action === 'onMouseEnter') ||
      (open && openState4 && action === 'onMouseLeave')
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu4(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  // Open the menu after a delay of timeoutDuration
  const onHover5 = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState5 && action === 'onMouseEnter') ||
      (open && openState5 && action === 'onMouseLeave')
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu5(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  const handleClick = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }
  const handleClick2 = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }
  const handleClick3 = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }
  const handleClick4 = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }
  const handleClick5 = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <>
      <div
        className={classNames(
          'md:flex flex-col justify-center items-center social-media-bar h-10 w-5 bg-transparent py-1 float-right hidden'
        )}>
        {/* Item 1 */}
        <Popover className='flex'>
          {({ open }) => (
            <div
              onMouseEnter={() => onHover(open, 'onMouseEnter')}
              onMouseLeave={() => onHover(open, 'onMouseLeave')}
              className='flex flex-row'>
              <Popover.Button ref={buttonRef} className='bg-blue-600'>
                <div
                  className={classNames(
                    open
                      ? 'text-white bg-blue-600 px-2 py-2 h-8 w-8'
                      : 'px-2 py-2 h-8 w-8'
                  )}
                  onClick={() => handleClick(open)}>
                  <span className='h-10 w-10'>
                    <a className='bg-blue-600 h-4'>
                      <FaStar
                        height={20}
                        width={20}
                        className='text-white mx-auto'
                      />
                    </a>
                  </span>
                </div>
              </Popover.Button>

              <Transition
                show={open}
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-md'
                enterTo='translate-x-30'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-30'
                leaveTo='-translate-x-md'>
                <Popover.Panel static className='z-10'>
                  <div
                    className={classNames(
                      'relative',
                      'bg-white border-white border-solid h-8 w-28 px-2 py-1 mr-14',
                      ''
                    )}>
                    <Fragment key={'PopoverPanel<>'}>
                      <Link href='/reviews'>
                        <a className='text-blue-600 text-sm'>Read Reviews</a>
                      </Link>
                    </Fragment>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          )}
        </Popover>

        {/* Item 2 */}
        <div className={classNames()}>
          <Popover className='flex' id='PopoverPanel2'>
            {({ open }) => (
              <div
                onMouseEnter={() => onHover2(open, 'onMouseEnter')}
                onMouseLeave={() => onHover2(open, 'onMouseLeave')}
                className='flex flex-row'>
                <Popover.Button ref={buttonRef2} className='bg-blue-600'>
                  <div
                    className={classNames(
                      open
                        ? 'text-white bg-blue-600  px-2 py-2 h-8 w-8'
                        : 'px-2 py-2 h-8 w-8'
                    )}
                    onClick={() => handleClick2(open)}>
                    <span className=''>
                      <a className='bg-blue-500 h-4'>
                        <BiCalculator
                          height={20}
                          width={20}
                          className='text-white mx-auto'
                        />
                      </a>
                    </span>
                  </div>
                </Popover.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  enter='transition ease-in-out duration-300 transform'
                  enterFrom='-translate-x-md'
                  enterTo='translate-x-30'
                  leave='transition ease-in-out duration-300 transform'
                  leaveFrom='translate-x-30'
                  leaveTo='-translate-x-md'>
                  <Popover.Panel static className='z-10 w-auto'>
                    <div
                      className={classNames(
                        'relative',
                        'bg-white border-white border-solid h-8 w-40 px-1 py-1 mr-36',
                        ''
                      )}>
                      <Fragment key={'PopoverPanel2<>'}>
                        <Link href='/request-free-estimate'>
                          <a className='text-blue-500 text-sm ml-2'>
                            Request a Free Estimate
                          </a>
                        </Link>
                      </Fragment>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            )}
          </Popover>
        </div>

        {/* Item 3 */}
        <div className={classNames()}>
          <Popover className='flex' id='PopoverPanel3'>
            {({ open }) => (
              <div
                onMouseEnter={() => onHover3(open, 'onMouseEnter')}
                onMouseLeave={() => onHover3(open, 'onMouseLeave')}
                className='flex flex-row'>
                <Popover.Button ref={buttonRef3} className='bg-blue-600'>
                  <div
                    className={classNames(
                      open
                        ? 'text-white bg-blue-600 px-2 py-2 h-8 w-8'
                        : 'px-2 py-2 h-8 w-8'
                    )}
                    onClick={() => handleClick3(open)}>
                    <span className=''>
                      <a className='bg-blue-500 h-4'>
                        <FaFacebookMessenger
                          height={20}
                          width={20}
                          className='text-white mx-auto'
                        />
                      </a>
                    </span>
                  </div>
                </Popover.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  enter='transition ease-in-out duration-300 transform'
                  enterFrom='-translate-x-md'
                  enterTo='translate-x-30'
                  leave='transition ease-in-out duration-300 transform'
                  leaveFrom='translate-x-30'
                  leaveTo='-translate-x-md'>
                  <Popover.Panel static className='z-10 w-auto'>
                    <div
                      className={classNames(
                        'relative',
                        'bg-white border-white border-solid h-8 w-40 px-1 py-1 mr-36',
                        ''
                      )}>
                      <Fragment key={'PopoverPanel3<>'}>
                        <a
                          className='text-blue-500 text-sm ml-2'
                          href='http://m.me/621437358480749'
                          target='_blank'
                          rel='noreferrer'>
                          Message Us
                        </a>
                      </Fragment>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            )}
          </Popover>
        </div>

        {/* Item 4 */}
        <div className={classNames()}>
          <Popover className='flex' id='PopoverPanel4'>
            {({ open }) => (
              <div
                onMouseEnter={() => onHover4(open, 'onMouseEnter')}
                onMouseLeave={() => onHover4(open, 'onMouseLeave')}
                className='flex flex-row'>
                <Popover.Button ref={buttonRef4} className='bg-blue-600'>
                  <div
                    className={classNames(
                      open
                        ? 'text-white bg-blue-600 px-2 py-2 h-8 w-8'
                        : 'px-2 py-2 h-8 w-8'
                    )}
                    onClick={() => handleClick4(open)}>
                    <span className=''>
                      <a className='bg-blue-500 h-4'>
                        <HiOutlineMail
                          height={20}
                          width={20}
                          className='text-white mx-auto'
                        />
                      </a>
                    </span>
                  </div>
                </Popover.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  enter='transition ease-in-out duration-300 transform'
                  enterFrom='-translate-x-md'
                  enterTo='translate-x-30'
                  leave='transition ease-in-out duration-300 transform'
                  leaveFrom='translate-x-30'
                  leaveTo='-translate-x-md'>
                  <Popover.Panel static className='z-10 w-auto'>
                    <div
                      className={classNames(
                        'relative',
                        'bg-white border-white border-solid h-8 w-40 px-1 py-1 mr-36',
                        ''
                      )}>
                      <Fragment key={'PopoverPanel4<>'}>
                        <a
                          className='text-blue-500 text-sm ml-2'
                          href='mailto:ultrademolitiontx@gmail.com'
                          target='_blank'
                          rel='noreferrer'>
                          Email Us
                        </a>
                      </Fragment>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            )}
          </Popover>
        </div>

        {/* Item 5 */}
        <div className={classNames()}>
          <Popover className='flex' id='PopoverPanel5'>
            {({ open }) => (
              <div
                onMouseEnter={() => onHover5(open, 'onMouseEnter')}
                onMouseLeave={() => onHover5(open, 'onMouseLeave')}
                className='flex flex-row'>
                <Popover.Button ref={buttonRef5} className='bg-blue-600'>
                  <div
                    className={classNames(
                      open
                        ? 'text-white bg-blue-600  px-2 py-2 h-8 w-8'
                        : 'px-2 py-2 h-8 w-8'
                    )}
                    onClick={() => handleClick5(open)}>
                    <span className=''>
                      <a className='bg-blue-500 h-4'>
                        <BiShareAlt
                          height={20}
                          width={20}
                          className='text-white mx-auto'
                        />
                      </a>
                    </span>
                  </div>
                </Popover.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  enter='transition ease-in-out duration-300 transform'
                  enterFrom='-translate-x-md'
                  enterTo='translate-x-30'
                  leave='transition ease-in-out duration-300 transform'
                  leaveFrom='translate-x-30'
                  leaveTo='-translate-x-md'>
                  <Popover.Panel static className='z-10 w-auto'>
                    <div
                      className={classNames(
                        'relative',
                        'bg-white border-white border-solid h-8 w-40 px-1 py-1 mr-36',
                        ''
                      )}>
                      <Fragment key={'PopoverPanel5<>'}>
                        <a
                          className='text-blue-500 text-sm ml-2 cursor-pointer'
                          onClick={openModal}>
                          Share Us
                        </a>
                      </Fragment>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            )}
          </Popover>
        </div>
      </div>
      <>
        {/* <div className='fixed inset-0 flex items-center justify-center'>
          <button
            type='button'
            onClick={openModal}
            className='px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            Open dialog
          </button>
        </div> */}

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 z-10 overflow-y-auto'
            onClose={closeModal}>
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
                  <div className='text-right'>
                    <button
                      type='button'
                      className='inline-flex justify-center px-2 py-1 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                      onClick={closeModal}>
                      <XIcon height={20} />
                    </button>
                  </div>
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
                      href='http://www.linkedin.com/shareArticle?mini=true&url=https://ultra-demolition-sepia.vercel.app&title=Reviews%20%7C%20Ultra%20Demolition'
                      target='_blank'
                      rel='noreferrer'>
                      <LinkedinIcon
                        round={true}
                        size={45}
                        url={'https://ultra-demolition-sepia.vercel.app/'}
                      />
                    </a>
                    <a
                      href='https://twitter.com/intent/tweet?text=https://ultra-demolition-sepia.vercel.app'
                      target='_blank'
                      rel='noreferrer'>
                      <TwitterIcon
                        round={true}
                        size={45}
                        url={'https://ultra-demolition-sepia.vercel.app/'}
                      />
                    </a>
                    <a
                      href='http://www.reddit.com/submit?url=https://ultra-demolition-sepia.vercel.app&title=Reviews%20%7C%20Ultra%20Demolition&text=Reviews%20%7C%20Ultra%20Demolition'
                      target='_blank'
                      rel='noreferrer'>
                      <RedditIcon
                        round={true}
                        size={45}
                        url={'https://ultra-demolition-sepia.vercel.app/'}
                      />
                    </a>
                    <a
                      href='http://pinterest.com/pin/create/button/?url=https://ultra-demolition-sepia.vercel.app&description=Reviews%20%7C%20Ultra%20Demolition'
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
    </>
  )
}
