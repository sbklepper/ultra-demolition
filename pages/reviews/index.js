import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Layout from '../../components/Layout'
import { FaStar } from 'react-icons/fa'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { Rating } from '@mui/material'
import { createReview } from '../../lib'
import Moment from 'react-moment'
import { XIcon } from '@heroicons/react/outline'

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
}

export const getServerSideProps = async () => {
  const result = await fetch(`https://ultra-demolition-sepia.vercel.app/api`)

  const data = await result.json()

  return {
    props: {
      data: data.reviews || null,
    },
  }
}

export default function ReviewsPage({ data }) {
  const [review, setReview] = useState({})
  const [reviews, setReviews] = useState({})

  let [isOpen, setIsOpen] = useState(false)

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

  // Calculate ratings avg
  let average =
    data.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / data.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <Layout title={'Ultra Demolition | Demolition Contractor | Reviews'}>
      {/* Hero */}
      <div className='relative bg-white h-3/4 py-12 md:py-24'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='/images/reviews/6-reviews-Hero.webp'
            alt=''
          />
          <div
            className='absolute inset-0 bg-gray-500 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto mt-20 md:mt-24 py-24 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-wide text-white sm:text-5xl lg:text-5xl text-center'>
            Ultra Demolition Client Reviews
          </h1>
          <p className='mt-6 text-lg text-white text-center tracking-wider'>
            Licensed, Insured, and Bonded | Free Estimates | Competitive Pricing
          </p>
          <p className='mt-6 text-3xl text-white text-center'>(409) 812-6292</p>
          <p className='mt-2 text-3xl text-white text-center'>(409) 504-2241</p>
        </div>
      </div>
      {/* Review Section */}
      <div className='bg-blue-500'>
        <div className='max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <div className='flex pb-1'>
                <Rating
                  name='size-medium'
                  value={parseInt(isNaN(average) ? 0 : average)}
                  precision={0.5}
                  color={colors.orange}
                />
                <p className='font-bold text-white md:text-xl ml-3'>
                  ({isNaN(average) ? 0 : average}) Overall Rating
                </p>
              </div>
            </div>
            <div className=''>
              <button
                type='button'
                onClick={openModal}
                className='block items-center justify-center px-1 md:px-4 py-1 md:py-2 border border-transparent text-base font-medium shadow-blue-700 shadow-lg text-white bg-blue-400 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                Write a Review
              </button>
            </div>

            {/* Review Modal */}
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
                          onClick={closeModal}>
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
                              className='block w-full shadow-lg py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md mb-5'
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
          <div className='w-full mx-auto border-t border-gray-300 mt-5' />
          <div className='flex justify-center md:justify-start py-4'>
            <button
              type='button'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-2xl text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              All ({isNaN(average) ? 0 : average}
              <span>
                {' '}
                <StarIcon className='text-yellow-300' height={14} />
              </span>{' '}
              / {data.length} Ratings)
            </button>
          </div>
          <div className='w-full mx-auto border-t border-gray-300 mt-2' />

          <div className='flex'>
            <p className='text-2xl text-white font-bold py-6 tracking-wide'>
              Here&apos;s what our satisfied customers are saying...
            </p>
          </div>
          <div className='flex'>
            <div className='px-1 md:px-10'>
              <Image
                src='/images/reviews/review-icon.png'
                height={64}
                width={64}
                alt=''
              />
            </div>

            {/* Review */}
            <div className='flex flex-col max-w-xs md:max-w-md'>
              {data.map((review) => (
                <div key={review.id}>
                  <p className='text-left text-white pb-1'>{review.name}</p>
                  <div className='flex pb-1'>
                    {Array.from({ length: review.rating }).map((i) => (
                      <FaStar key={i} size={18} color={colors.orange} />
                    ))}
                  </div>
                  <p className='text-left mb-2 text-white source-styles'>
                    {review.comment}
                  </p>
                  <p className='text-left text-white source-styles'>
                    <Moment format='MM/DD/YYYY'>{review.date}</Moment>
                  </p>
                  <div className='w-full border-t border-gray-300 pb-6 mt-5' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
