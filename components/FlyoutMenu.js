import { Fragment, useRef, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FlyoutMenu({
  menuTitle = 'Demolition, Site Preparation & Cleanup',
  linksArray = [
    ['Demolition', '/demolition'],
    ['Land Clearing and Excavation', '/land-clearing-excavation'],
    ['Debris CLeanup', '/debris-cleanup'],
  ],
}) {
  const router = useRouter()
  const [pathName, setPathName] = useState(router.pathname)

  const newPathName = () => {
    setPathName(router.pathname)
  }

  let timeout // NodeJS.Timeout
  const timeoutDuration = 400

  const buttonRef = useRef(null) // useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = useState(false)

  const toggleMenu = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState)
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click() // eslint-disable-line
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

  const handleClick = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }

  const LINK_STYLES = classNames(
    'py-2 mt-2 px-1 w-auto',
    'text-base text-white font-bold w-auto',
    'transition duration-500 ease-in-out',
    'bg-black text-white hover:text-gray-300 rounded-md hover:bg-blue-400'
  )

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
    <div
      className={classNames(
        'w-auto h-full relative inline-flex',
        'bg-transparent'
      )}>
      <Popover className='relative mx-auto flex '>
        {({ open }) => (
          <div
            onMouseEnter={() => onHover(open, 'onMouseEnter')}
            onMouseLeave={() => onHover(open, 'onMouseLeave')}
            className='flex flex-col'>
            <Popover.Button ref={buttonRef} className='outline-0'>
              <div
                className={classNames(
                  open ? 'text-gray-300 bg-blue-400' : 'text-gray-800',
                  'bg-black rounded-md',
                  'border-2 border-black border-solid',
                  'flex',
                  LINK_STYLES
                )}
                onClick={() => handleClick(open)}>
                <span className='inline-flex text-white text-base mt-0.5'>
                  {menuTitle}
                  <ChevronDownIcon
                    className={classNames(
                      open
                        ? 'text-gray-600 rotate-180 duration-500'
                        : 'text-white',
                      'h-7 w-9 inline-block',
                      'transform transition-all duration-500'
                    )}
                    aria-hidden='true'
                  />
                </span>
              </div>
            </Popover.Button>

            <Transition
              show={open}
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'>
              <Popover.Panel static className='z-10 w-auto'>
                <div
                  className={classNames(
                    'relative grid space-y-[2px]',
                    'bg-black border-2 border-black border-solid',
                    ' rounded-md'
                  )}>
                  {linksArray.map(([title, href]) => (
                    <Fragment key={'PopoverPanel<>' + title + href}>
                      <Link href={href}>
                        <a
                          className={
                            router.pathname === href
                              ? 'py-2 mt-2 px-1 text-base text-white font-bold w-auto bg-blue-400 transition duration-500 ease-in-out hover:text-gray-300 rounded-md  hover:bg-blue-500'
                              : LINK_STYLES
                          }
                          onClick={newPathName}
                          pathname={pathName}>
                          {title}
                        </a>
                      </Link>
                    </Fragment>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        )}
      </Popover>
    </div>
  )
}
