import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const files = [
  {
    source: '/images/gallery/photo-gallery/1.jpeg',
    alt: 'Image 1',
    overlay: 'Before',
  },
  {
    source: '/images/gallery/photo-gallery/2.jpeg',
    alt: 'Image 2',
    overlay: 'After',
  },
  {
    source: '/images/gallery/photo-gallery/3.jpeg',
    alt: 'Image 3',
    overlay: 'Before',
  },
  {
    source: '/images/gallery/photo-gallery/4.jpeg',
    alt: 'Image 4',
    overlay: 'After',
  },
  {
    source: '/images/gallery/photo-gallery/5.jpeg',
    alt: 'Image 5',
    overlay: 'Before',
  },
  {
    source: '/images/gallery/photo-gallery/6.jpeg',
    alt: 'Image 6',
    overlay: 'Before',
  },
  {
    source: '/images/gallery/photo-gallery/7.jpeg',
    alt: 'Image 7',
    overlay: 'During',
  },
  {
    source: '/images/gallery/photo-gallery/8.jpeg',
    alt: 'Image 8',
    overlay: 'After',
  },
  {
    source: '/images/gallery/photo-gallery/10.jpeg',
    alt: 'Image 10',
    overlay: 'After',
  },
  {
    source: '/images/gallery/photo-gallery/11.jpeg',
    alt: 'Image 11',
    overlay: 'After',
  },
  {
    source: '/images/gallery/photo-gallery/12.jpeg',
    alt: 'Image 12',
    overlay: 'After',
  },
  {
    source: '/images/gallery/photo-gallery/13.webp',
    alt: 'Image 13',
  },
  {
    source: '/images/gallery/photo-gallery/14.jpeg',
    alt: 'Image 14',
  },
  {
    source: '/images/gallery/photo-gallery/15.jpeg',
    alt: 'Image 15',
  },
  {
    source: '/images/gallery/photo-gallery/16.jpeg',
    alt: 'Image 16',
  },
  {
    source: '/images/gallery/photo-gallery/17.jpeg',
    alt: 'Image 17',
  },
  {
    source: '/images/gallery/photo-gallery/18.jpeg',
    alt: 'Image 18',
  },
  {
    source: '/images/gallery/photo-gallery/19.jpeg',
    alt: 'Image 19',
  },
  {
    source: '/images/gallery/photo-gallery/20.jpeg',
    alt: 'Image 20',
  },
  {
    source: '/images/gallery/photo-gallery/21.jpeg',
    alt: 'Image 21',
  },
  {
    source: '/images/gallery/photo-gallery/22.jpeg',
    alt: 'Image 22',
  },
  {
    source: '/images/gallery/photo-gallery/23.jpeg',
    alt: 'Image 23',
  },
  {
    source: '/images/gallery/photo-gallery/24.jpeg',
    alt: 'Image 24',
  },
  {
    source: '/images/gallery/photo-gallery/25.jpeg',
    alt: 'Image 25',
  },
  {
    source: '/images/gallery/photo-gallery/26.jpeg',
    alt: 'Image 26',
  },
  {
    source: '/images/gallery/photo-gallery/27.jpeg',
    alt: 'Image 27',
  },
  {
    source: '/images/gallery/photo-gallery/28.jpeg',
    alt: 'Image 28',
  },
  {
    source: '/images/gallery/photo-gallery/29.jpeg',
    alt: 'Image 29',
  },
  {
    source: '/images/gallery/photo-gallery/30.jpeg',
    alt: 'Image 30',
  },
  {
    source: '/images/gallery/photo-gallery/31.jpeg',
    alt: 'Image 31',
  },
  {
    source: '/images/gallery/photo-gallery/32.jpeg',
    alt: 'Image 32',
  },
  {
    source: '/images/gallery/photo-gallery/33.jpeg',
    alt: 'Image 33',
  },
  {
    source: '/images/gallery/photo-gallery/34.jpeg',
    alt: 'Image 34',
  },
  {
    source: '/images/gallery/photo-gallery/35.jpeg',
    alt: 'Image 35',
  },
  {
    source: '/images/gallery/photo-gallery/36.jpeg',
    alt: 'Image 36',
  },
  {
    source: '/images/gallery/photo-gallery/37.jpeg',
    alt: 'Image 37',
  },
  {
    source: '/images/gallery/photo-gallery/38.jpeg',
    alt: 'Image 38',
  },
  {
    source: '/images/gallery/photo-gallery/39.jpeg',
    alt: 'Image 39',
  },
  {
    source: '/images/gallery/photo-gallery/40.jpeg',
    alt: 'Image 40',
  },
  {
    source: '/images/gallery/photo-gallery/41.jpeg',
    alt: 'Image 41',
  },
  {
    source: '/images/gallery/photo-gallery/42.jpeg',
    alt: 'Image 42',
  },
  {
    source: '/images/gallery/photo-gallery/43.jpeg',
    alt: 'Image 43',
  },
  {
    source: '/images/gallery/photo-gallery/44.jpeg',
    alt: 'Image 44',
  },
  {
    source: '/images/gallery/photo-gallery/45.jpeg',
    alt: 'Image 45',
  },
  {
    source: '/images/gallery/photo-gallery/46.jpeg',
    alt: 'Image 46',
  },
  {
    source: '/images/gallery/photo-gallery/47.jpeg',
    alt: 'Image 47',
  },
  {
    source: '/images/gallery/photo-gallery/48.jpeg',
    alt: 'Image 48',
  },
  {
    source: '/images/gallery/photo-gallery/49.jpeg',
    alt: 'Image 49',
  },
  {
    source: '/images/gallery/photo-gallery/50.jpeg',
    alt: 'Image 50',
  },
  {
    source: '/images/gallery/photo-gallery/51.jpeg',
    alt: 'Image 51',
  },
  {
    source: '/images/gallery/photo-gallery/52.jpeg',
    alt: 'Image 52',
  },
  {
    source: '/images/gallery/photo-gallery/53.jpeg',
    alt: 'Image 53',
  },
  {
    source: '/images/gallery/photo-gallery/54.jpeg',
    alt: 'Image 54',
    overlay: 'Before',
  },
  {
    source: '/images/gallery/photo-gallery/55.jpeg',
    alt: 'Image 55',
    overlay: 'After',
  },
  {
    source: '/images/gallery/photo-gallery/56.jpeg',
    alt: 'Image 56',
    overlay: 'Before',
  },
  {
    source: '/images/gallery/photo-gallery/57.jpeg',
    alt: 'Image 57',
    overlay: 'After',
  },
  {
    source: '/images/gallery/photo-gallery/58.jpeg',
    alt: 'Image 58',
  },
  {
    source: '/images/gallery/photo-gallery/59.jpeg',
    alt: 'Image 59',
  },
  {
    source: '/images/gallery/photo-gallery/60.jpeg',
    alt: 'Image 60',
  },
  {
    source: '/images/gallery/photo-gallery/61.jpeg',
    alt: 'Image 61',
  },
  {
    source: '/images/gallery/photo-gallery/62.jpeg',
    alt: 'Image 62',
  },
  {
    source: '/images/gallery/photo-gallery/63.jpeg',
    alt: 'Image 63',
  },
  {
    source: '/images/gallery/photo-gallery/64.jpeg',
    alt: 'Image 64',
    overlay: 'Before/After',
  },
  {
    source: '/images/gallery/photo-gallery/65.jpeg',
    alt: 'Image 65',
    overlay: 'Before',
  },
  {
    source: '/images/gallery/photo-gallery/66.webp',
    alt: 'Image 66',
    overlay: 'In Progress',
  },
]

export default function GalleryPage() {
  return (
    <Layout title={'Ultra Demolition | Demolition Contractor | Photo Gallery'}>
      {/* Hero */}
      <div className='relative bg-white h-3/4 py-12 md:py-24'>
        <div className='absolute inset-0'>
          <Image
            className='w-full h-full object-cover'
            src='/images/gallery/5-gallery-hero.webp'
            layout='fill'
            objectFit='cover'
            priority={true}
            placeholder='blur'
            blurDataURL
            alt='Ultra Demolition Photo Gallery'
          />
          <div
            className='absolute inset-0 bg-gray-400 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto mt-20 md:mt-24 py-24 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-wide text-white sm:text-5xl lg:text-5xl text-center'>
            Ultra Demolition Photo Gallery
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
        <div className='max-w-6xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 '>
          <h2 className='text-2xl font-extrabold text-white'>
            <span className='block'>
              Check Out Some Photos of Our Demolition, Land Clearing, and
              Cleanup Work
            </span>
          </h2>
          <p className='mt-4 text-lg leading-6 text-white source-styles'>
            Whether you want to get a structure demolished or construction
            debris hauled from your site, rely on the professionals at Ultra
            Demolition to handle it expertly. Our work is of high quality and
            offered at competitive prices.{' '}
            <Link href='/contact'>
              <a className='underline hover:text-blue-700'>Call</a>
            </Link>{' '}
            us today for a <span className='font-bold uppercase'>free</span>{' '}
            estimate.
          </p>
        </div>

        {/* Image Gallery */}
        <div className='px-10 max-w-7xl mx-auto'>
          <SimpleReactLightbox>
            <SRLWrapper>
              <ul
                role='list'
                className='grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-3'>
                {files.map((file) => (
                  <li key={file.source} className='relative'>
                    <div className='group block w-full h-auto aspect-w-5 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden'>
                      <a href={file.source}>
                        <Image
                          src={file.source}
                          height={250}
                          width={300}
                          placeholder='blur'
                          blurDataURL
                          alt={file.alt}
                          srl_gallery_image='true'
                          className=''
                        />
                        <p className='absolute text-2xl mb-4 bottom-0 inset-x-0 text-white text-center'>
                          {file.overlay}
                        </p>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </div>
    </Layout>
  )
}
