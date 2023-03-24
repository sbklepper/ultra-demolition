import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, XIcon } from '@heroicons/react/solid'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState, useEffect } from 'react'
import { readReview, createReview } from '../lib/'
import { FaStar } from 'react-icons/fa'
import Moment from 'react-moment'

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
}

const posts = [
  {
    title: 'Demolition Services',
    href: '/demolition',
    description:
      'If you want to demolish a residential or commercial structure, hire us and get services that are second to none. Ultra Demolition is a local, minority- and women-owned business.',
    imageUrl: '/images/home/ultra-demo-home-cards-1.jpeg',
  },
  {
    title: 'Land Clearing and Excavation',
    href: '/land-clearing-excavation',
    description:
      'Whether you need land clearing, excavation services, or a pond dug for your new construction project, rely on us to take care of it. We provide all our services at affordable prices.',
    imageUrl: '/images/home/ultra-demo-home-cards-2.jpeg',
  },
  {
    title: 'Debris and Yard Cleanup',
    href: '/debris-cleanup',
    description:
      "Ensure your construction site or yard is spick-and-span by choosing us to clean it. From debris removal to hauling, we'll handle everything! Call us today for a FREE estimate.",
    imageUrl: '/images/home/ultra-demo-home-cards-3.jpeg',
  },
]

export const getServerSideProps = async () => {
  const result = await fetch(
    `https://ultra-demolition-sepia.vercel.app/api/oneReview`
  )

  const data = await result.json()

  return {
    props: {
      data: data.reviews || null,
    },
  }
}

export default function Home({ data }) {
  const [review, setReview] = useState({})
  const [reviews, setReviews] = useState({})
  let [isOpen, setIsOpen] = useState(false)
  let [isReviewOpen, setIsReviewOpen] = useState(false)

  const stars = Array(5).fill(0)
  const [currentValue, setCurrentValue] = React.useState(0)
  const [hoverValue, setHoverValue] = React.useState(undefined)
  const handleClick = (value) => {
    setCurrentValue(value)
  }
  const handleMouseOver = (value) => {
    setHoverValue(value)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  function closeReviewModal() {
    setIsReviewOpen(false)
  }

  function openReviewModal() {
    setIsReviewOpen(true)
  }

  // Create Review
  const createReview2 = async () => {
    try {
      const data = await createReview(review)
      setReview([...reviews, data])
    } catch (error) {
      console.log(error)
    }
  }

  let [reviewCount, setreviewCount] = useState([])
  const setCountFxn = (no) => {
    setReview(no)
  }

  return (
    <Layout>
      {/* Hero */}
      <div className='relative bg-white h-3/4 py-12 md:py-24'>
        <div className='absolute inset-0'>
          <Image
            className='w-full h-full object-cover'
            src='/images/home/1-homepage-hero.webp'
            layout='fill'
            objectFit='cover'
            priority={true}
            placeholder='blur'
            blurDataURL
            alt='Ultra Demolition'
          />
          <div
            className='absolute inset-0 bg-gray-200 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto mt-20 md:mt-24 py-24 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-wide text-white sm:text-5xl lg:text-5xl text-center'>
            Demolition and Site Clearing Contractor
          </h1>
          <p className='mt-6 text-lg text-white text-center tracking-wider'>
            Licensed, Insured, and Bonded | Free Estimates | Competitive Pricing
          </p>
          <p className='mt-6 text-3xl text-white text-center'>
            {' '}
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

      {/* Card section */}
      <div className='relative bg-blue-500 pt-16 pb-20 px-4 sm:px-6 lg:py-12 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-blue-500 h-1/3 sm:h-2/3' />
        </div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-2xl md:text-4xl tracking-wide font-extrabold text-white '>
              The Trusted Contractor for Demolition, Land Clearing, and Debris
              Cleanup
            </h2>
          </div>
          <div className='mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none'>
            {posts.map((post) => (
              <div
                key={post.title}
                className='flex flex-col justify-center overflow-hidden'>
                <div className='text-center'>
                  <Image
                    className='mx-auto'
                    src={post.imageUrl}
                    width={350}
                    height={250}
                    alt=''
                  />
                </div>
                <div className='flex-1 bg-blue-500 p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-indigo-600'></p>
                    <Link href={post.href}>
                      <a className='block mt-2'>
                        <p className='text-2xl tracking-wide font-semibold text-white text-center'>
                          {post.title}
                        </p>
                        <p className='mt-3 text-lg ml-3 text-white'>
                          {post.description}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className='mt-6 mb-10 flex items-center justify-center'>
                    <div className='w-full'>
                      <p className='text-sm font-medium text-gray-900'>
                        <Link href={post.href}>
                          <a className='hover:underline'>
                            <button
                              type='button'
                              className='block items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium shadow-blue-700 shadow-lg text-white bg-blue-400 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                              Learn more
                            </button>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Single Review Section */}
      <section className='w-full h-38 px-2 py-6 md:py-24 bg-gray-700 grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col justify-center items-start mx-auto condensed-styles py-6 md:py-2 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            id='1830610695'
            className='fill-white h-20'
            data-icon-name='li-message'>
            {' '}
            <g id='1856955135'>
              {' '}
              <path
                d='M75.4,23.9H24.6c-2.7,0-4.9,2.2-4.9,4.9v31.3c0,2.7,2.2,4.9,4.9,4.9h34.8l11.2,11.2V65h4.9c2.7,0,4.9-2.2,4.9-4.9V28.8
		C80.3,26.1,78.1,23.9,75.4,23.9z M78.4,60.1c0,1.6-1.3,2.9-2.9,2.9h-6.8v8.4L60.2,63H24.6c-1.6,0-2.9-1.3-2.9-2.9V28.8
		c0-1.6,1.3-2.9,2.9-2.9h50.9c1.6,0,2.9,1.3,2.9,2.9V60.1z'
                id='1598447490'></path>
              <rect
                x='35.3'
                y='43.4'
                width='29.3'
                height='2'
                id='1983409728'></rect>
              <rect
                x='35.3'
                y='33.7'
                width='29.3'
                height='2'
                id='1407239196'></rect>
              <rect
                x='35.3'
                y='53.2'
                width='19.6'
                height='2'
                id='1762718789'></rect>
            </g>
          </svg>
          <p className='text-4xl text-white max-w-md'>
            Here&apos;s what our satisfied clients are saying...
          </p>
        </div>
        <div className='flex flex-col justify-center items-start mx-auto source-styles text-white max-w-md md:max-w-lg py-6 md:py-2'>
          <div className='py-'>
            <p className='font-bold py-4'>{data[0].name}</p>
            <div className='flex pb-2'>
              {Array.from({ length: data[0].rating }).map((i) => (
                <FaStar key={i} size={18} color={colors.orange} />
              ))}
            </div>

            <p className='pb-2'>{data[0].comment}</p>
            <p className='pb-4'>
              <Moment format='MM/DD/YYYY'>{data[0].date}</Moment>
            </p>
            <div className='w-full border-t border-gray-300 pb-6' />
            <button
              type='button'
              onClick={openReviewModal}
              className='block items-center justify-center w-auto px-10 py-2 border border-transparent text-base font-medium shadow-black shadow-lg text-white bg-blue-400 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Write a Review
            </button>

            {/* Review Modal */}
            <Transition appear show={isReviewOpen} as={Fragment}>
              <Dialog
                as='div'
                className='fixed inset-0 z-10 overflow-y-auto'
                onClose={closeReviewModal}>
                <div className='min-h-screen px-4 text-center'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <Dialog.Overlay className='fixed inset-0' />
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
                    <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                      <div className='text-right'>
                        <button
                          type='button'
                          className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                          onClick={closeReviewModal}>
                          <XIcon height={15} />
                        </button>
                      </div>
                      <Dialog.Title
                        as='h3'
                        className='text-xl font-medium text-center leading-6 text-blue-600 mb-2'>
                        Leave your feedback
                      </Dialog.Title>
                      <p>
                        Thank you for taking the time to tell us about your
                        experience. Please fill out the survey below.
                      </p>
                      <form
                        action='#'
                        method='POST'
                        className='grid grid-cols-1 gap-y-6'>
                        <div className=''>
                          <div className='text-center my-3'>
                            <div className='inline-flex'>
                              {stars.map((_, index) => {
                                return (
                                  <FaStar
                                    key={index}
                                    size={24}
                                    className=''
                                    style={{
                                      marginRight: 10,
                                      cursor: 'pointer',
                                    }}
                                    color={
                                      (hoverValue || currentValue) > index
                                        ? colors.orange
                                        : colors.grey
                                    }
                                    onClick={() => {
                                      setReview({
                                        ...review,
                                        rating: index + 1,
                                      })
                                    }}
                                    onMouseOver={() =>
                                      handleMouseOver(index + 1)
                                    }
                                  />
                                )
                              })}
                            </div>
                          </div>

                          <div>
                            <label htmlFor='comment' className='sr-only'>
                              Comment
                            </label>
                            <textarea
                              id='comment'
                              name='comment'
                              rows={4}
                              value={review.comment}
                              onChange={(e) =>
                                setReview({
                                  ...review,
                                  comment: e.target.value,
                                })
                              }
                              className='block w-full shadow-lg py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md mb-3'
                              placeholder='Your comment'
                              defaultValue={''}
                            />
                          </div>

                          <label htmlFor='name' className='sr-only'>
                            Full name
                          </label>
                          <input
                            type='text'
                            name='name'
                            id='name'
                            required
                            value={review.name}
                            onChange={(e) =>
                              setReview({ ...review, name: e.target.value })
                            }
                            autoComplete='name'
                            className='block w-full shadow-lg py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                            placeholder='Name'
                          />
                        </div>
                        <div>
                          <label htmlFor='email' className='sr-only'>
                            Email
                          </label>
                          <input
                            id='email'
                            name='email'
                            type='email'
                            required
                            autoComplete='email'
                            value={review.email}
                            onChange={(e) =>
                              setReview({ ...review, email: e.target.value })
                            }
                            className='block w-full shadow-lg py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                            placeholder='Enter your email address'
                          />
                          <p className='py-3 mx-3 text-center'>
                            By submitting this survey response, you agree to
                            these Terms of Use
                          </p>
                        </div>

                        <div>
                          <button
                            type='submit'
                            onClick={createReview2}
                            className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <div className='relative bg-white source-styles'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='/images/home/vieo-section.webp'
            alt=''
          />
          <div
            className='absolute inset-0 bg-gray-500 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative mx-auto text-center py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-2xl font-extrabold tracking-tight text-white lg:text-4xl'>
            Learn More About
          </h1>
          <h1 className='text-4xl font-extrabold tracking-tight text-white lg:text-6xl'>
            Ultra Demolition
          </h1>
          <div className='mt-6 text-xl flex items-center justify-center text-indigo-100'>
            <div className='inset-0 flex items-center justify-center'>
              <button type='button' onClick={openModal}>
                <Image
                  src='/images/home/play-button.png'
                  width={110}
                  height={110}
                  alt=''
                />
              </button>
            </div>

            {/* Video Modal */}
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as='div'
                className='fixed inset-0 z-10 overflow-y-auto '
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
                    <Dialog.Overlay className='fixed inset-0 bg-gray-300 opacity-40' />
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
                    <div className='inline-block w-full max-w-2xl p-2 my-8 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl rounded-2xl'>
                      <XIcon
                        className='text-white float-right cursor-pointer'
                        height={20}
                        onClick={closeModal}
                      />
                      <video className='h-auto w-auto' controls>
                        <source
                          src='/images/home/video/ultra-demolition-video.mp4'
                          height={360}
                          width={639}
                          type='video/mp4'
                        />
                      </video>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </Layout>
  )
}
