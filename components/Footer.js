import Image from 'next/image'
import Link from 'next/link'

const navigation = {
  cities: [
    { name: 'Silsbee, TX' },
    { name: 'Lumberton, TX' },
    { name: 'Commerce' },
    { name: 'Beaumont, TX' },
    { name: 'Port Arthur, TX' },
    { name: 'Nederland, TX' },
    { name: 'Orange, TX' },
    { name: 'Groves, TX' },
    { name: 'Buna, TX' },
    { name: 'Jasper, TX' },
    { name: 'Kirbyville, TX' },
  ],
  contact: [
    { name: 'Main: (409) 812-6292', href: 'tel:4098126292' },
    { name: 'Local: (409) 812-6292', href: 'tel:4098126292' },
    { name: 'Alternate: (409) 504-2241', href: 'tel:4095042241' },
    {
      name: 'ultrademolitiontx@gmail.com',
      href: 'mailto:ultrademolitiontx@gmail.com',
    },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/ultrademolitionllc/',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
}

const bottomNav = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
  { name: 'Conditions of Use', href: '/conditions-of-use' },
  // { name: 'Notice and Take Down Policy', href: '/infringement-policy' },
  // { name: 'Website Accessibility Policy', href: '/accessibility-statement' },
]

export default function Footer() {
  return (
    <>
      <footer className='bg-black' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:pt-16 lg:pb-6 lg:px-8'>
          <div className='xl:grid xl:grid-cols-2 xl:gap-8'>
            <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
              <div className='grid grid-cols-1 md:gap-8 mx-auto'>
                <div className='text-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 70 70'
                    id='1215004593'
                    className='svg u_1215004593 fill-white h-10 mx-auto'
                    data-icon-name='wp-location_pin'>
                    {' '}
                    <path
                      d='M35,10c-9.4,0-17,7.6-17,17c0,4.1,1.5,8,4.1,11.1l0.1,0.1c4.6,5.3,7.9,10.8,9.9,16.4l1,3.7l0,0.1c0.3,1.1,1,1.6,1.9,1.6
	c0.9,0,1.6-0.5,1.9-1.6l1-3.8c1.9-5.6,5.3-11.2,9.9-16.4l0.1-0.1C50.5,35,52,31.1,52,27C52,17.6,44.4,10,35,10z M35,33
	c-3.3,0-6-2.7-6-6s2.7-6,6-6c3.3,0,6,2.7,6,6S38.3,33,35,33z'
                      id='1703144790'></path>
                  </svg>
                  <h3 className='text-md font-semibold text-gray-400 tracking-wider uppercase'>
                    Serving
                  </h3>
                  <ul role='list' className='mt-2 space-y-1'>
                    {navigation.cities.map((city) => (
                      <li
                        key={city.name}
                        className='text-base text-gray-300 hover:text-white'>
                        {city.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='grid grid-cols-1 md:gap-8 mx-auto'>
                <div className='text-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 70 70'
                    id='1768403284'
                    className='svg u_1768403284 fill-white h-10 mx-auto'
                    data-icon-name='wp-bullhorn'>
                    {' '}
                    <path
                      d='M53,17c-0.4,0-0.8,0.1-1.1,0.2c0,0-38.6,12.7-39.2,12.8c-1.6,0.5-2.7,2.5-2.7,5s1.1,4.5,2.7,5c0.2,0.1,4.4,1.4,9.9,3.2
	l-0.4,1.1c-0.8,2.4,0.4,5,2.8,5.8l7.3,2.6c0.5,0.2,1,0.3,1.6,0.3c0.7,0,1.4-0.2,2-0.5c1.1-0.5,2-1.5,2.4-2.6l0.5-1.4
	c7.1,2.3,13.1,4.3,13.1,4.3c0.4,0.1,0.7,0.2,1.1,0.2c4.5,0,7-9.3,7-18S57.5,17,53,17z M36.4,49.3c-0.2,0.7-0.7,1.2-1.3,1.5
	c-0.6,0.3-1.3,0.3-2,0.1l-7.3-2.6c-1.3-0.5-2-2-1.6-3.3l0.4-1.1c3.9,1.3,8.3,2.7,12.4,4.1L36.4,49.3z M53,51c-2.1,0-5-6.1-5-16
	s2.9-16,5-16c2.1,0,5,6.1,5,16S55.1,51,53,51z'
                      id='1459554540'></path>
                  </svg>
                  <h3 className='text-md font-semibold text-gray-400 tracking-wider uppercase'>
                    Contact Us
                  </h3>
                  <ul role='list' className='mt-2 space-y-1'>
                    {navigation.contact.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-base text-gray-300 hover:text-white'
                          target='_blank'
                          rel='noreferrer'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='py-4 flex items-center justify-center'>
            <div className='w-1/2 border-t border-gray-300 mr-8' />
            <div className='flex space-x-6 '>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-blue-500 hover:text-blue-400'
                  target='_blank'
                  rel='noreferrer'>
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-12 w-12' aria-hidden='true' />
                </a>
              ))}
            </div>
            <div className='w-1/2 border-t border-gray-300 ml-8' />
          </div>
        </div>
      </footer>
      <div className='bg-white  flex items-center justify-center py-2'>
        {bottomNav.map((item) => (
          <Link key={item.name} href={item.href}>
            <a>
              <p className='text-xs font-normal text-center px-1 hover:text-gray-700'>
                {item.name}
              </p>
            </a>
          </Link>
        ))}
      </div>
      <div className='text-center pb-2'>
        <p className='text-xs font-normal'>
          <span>&copy; {new Date().getFullYear()}</span> The content on this
          website is owned by us and our licensors. Do not copy any content
          (including images) without our consent.
        </p>
      </div>
    </>
  )
}
