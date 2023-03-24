import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout title={'Ultra Demolition | Demolition Contractor | About'}>
      {/* Hero */}
      <div className='relative bg-black h-3/4 py-12 md:py-24'>
        <div className='absolute inset-0'>
          <div
            className='absolute inset-0 bg-black mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto mt-20 md:mt-24 py-24 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-wide text-white sm:text-5xl lg:text-5xl text-center'>
            About Ultra Demolition
          </h1>
          <p className='mt-6 text-lg text-white text-center tracking-wider'>
            Licensed, Insured, and Bonded | Free Estimates | Competitive Pricing
          </p>
          <p className='mt-6 text-3xl text-white text-center'>
            <a
              className='hover:text-blue-600 hover:underline'
              href='tel:4098126292'
              target='_blank'
              rel='noreferrer'>
              (409) 812-6292
            </a>
          </p>
          <p className='mt-2 text-3xl text-white text-center'>
            {' '}
            <a
              className='hover:text-blue-600 hover:underline'
              href='tel:4905042241'
              target='_blank'
              rel='noreferrer'>
              (409) 504-2241
            </a>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className='bg-blue-500 pb-5'>
        <div className='max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 '>
          <p className='mt-4 text-lg leading-6 text-white source-styles'>
            Ultra Demolition is dedicated to providing the safest workplace
            possible. Safety has played a huge role in the success of this
            company, although this achievement has not been acquired by safety
            alone. Our success has also been attributed to our ability to
            analyze and evaluate a project. We develop and implement the most
            innovative methods which will equate in cost and time, which in turn
            will show a reduced expense to our clients.
          </p>
        </div>

        <div className='flex max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-white'>
          <div className='flex flex-col max-w-sm md:max-w-md px-4 mx-auto'>
            <h1 className='text-2xl px-4 pb-2'>About Us</h1>
            <p className='source-styles px-4 md:px-2 pb-3'>
              Ultra Demolition provides commercial and residential debris
              removal, demolition, land clearing and excavation to the Golden
              Triangle, TX area.
            </p>

            <h1 className='text-2xl pb-2  px-4'>Services</h1>
            <ul className='list-disc source-styles  px-4'>
              <li>Demolition</li>
              <li>Excavation</li>
              <li>Land Clearing</li>
              <li>Site Clearing</li>
              <li>Residential and Commercial Debris Cleanup</li>
            </ul>
          </div>
          <div className='flex flex-col mx-auto'>
            <h1 className='text-2xl pb-3'>Languages</h1>
            <ul className='list-disc pb-2 source-styles'>
              <li>English</li>
              <li>Spanish</li>
            </ul>

            <h1 className='text-2xl pb-3'>Specialties</h1>
            <ul className='list-disc source-styles'>
              <li>Demolition</li>
              <li>Land clearing</li>
              <li>Excavation</li>
              <li>Debris Removal</li>
            </ul>
          </div>
        </div>

        <div className='max-w-5xl border-t border-dotted border-gray-300 pb-6 flex mx-auto' />

        {/* Facebook Feed */}
        <div className='flex justify-center items-center py-6'>
          <iframe
            name='f8f484230fb958'
            width='400px'
            height='500px'
            data-testid='fb:page Facebook Social Plugin'
            title='fb:page Facebook Social Plugin'
            frameBorder='0'
            allowtransparency='true'
            allowFullScreen={true}
            scrolling='no'
            allow='encrypted-media'
            src='https://www.facebook.com/v2.8/plugins/page.php?adapt_container_width=true&amp;app_id=1822295708016537&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df43202d1eb5688%26domain%3Dwww.ultrademolitionllc.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.ultrademolitionllc.com%252Ff3186e917934178%26relation%3Dparent.parent&amp;container_width=500&amp;height=500&amp;hide_cover=false&amp;hide_cta=true&amp;href=https%3A%2F%2Fwww.facebook.com%2FUltra-Demolition-621437358480749%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline%2Cevents%2Cmessages&amp;width=500'
            className=''
            id='ae_iframe_gdzw5out'></iframe>
        </div>
      </div>
    </Layout>
  )
}
