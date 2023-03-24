import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import Recaptcha from 'react-recaptcha'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../components/Layout'

export default function RequestFreeEstimatePage() {
  const [recaptchaLoad, setRecaptchaLoad] = React.useState(false)
  const [isVerified, setIsVerified] = React.useState(false)
  const form = useRef()

  function fun() {
    document.getElementById('name').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('email').value = ''
    document.getElementById('services').value = 'Demolition'
    document.getElementById('message').value = ''
  }

  toast.configure({
    autoClose: 8000,
    draggable: false,
  })

  const recaptchaLoaded = () => {
    setRecaptchaLoad(true)
  }

  const verifiedRecaptcha = (response) => {
    if (response) {
      setIsVerified(true)
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()
    if (
      e.target.name.value === '' ||
      e.target.phone.value === '' ||
      e.target.email.value === '' ||
      e.target.message.value === ''
    ) {
      return toast.error('Form cannot be empty!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    if (!isVerified) {
      return toast.error('Please check reCaptcha and try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    if (recaptchaLoad && isVerified) {
      emailjs
        .sendForm(
          'service_fjhxdv7',
          'template_yqx9nqo',
          form.current,
          'user_caJdcyqxekjliAG0lX1Wk'
        )
        .then(
          (result) => {
            toast('🎉  Message sent!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
      fun()
    }
  }

  return (
    <Layout
      title={
        'Ultra Demolition | Demolition Contractor | Request a Free Estimate'
      }>
      <div className='bg-blue-500 pt-36'>
        <div className='max-w-5xl mx-auto text-left py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-extrabold text-white mx-5 md:mx-10'>
            <span className='block'>Request A Free Estimate</span>
          </h2>
          <p className='mt-4 text-lg leading-6 text-white source-styles mx-5 md:mx-10'>
            Fill out this short form and an Ultra Demolition representative will
            contact you the same business day to provide you a FREE estimate. If
            you need immediate assistance, please call{' '}
            <a
              className='hover:text-blue-600 hover:underline'
              href='tel:4098126292'
              target='_blank'
              rel='noreferrer'>
              (409) 812-6292
            </a>
            .
          </p>

          {/* Form */}
          <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
            <form
              action='#'
              method='POST'
              className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
              ref={form}
              onSubmit={sendEmail}>
              {/* Name */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-md font-medium text-white'>
                  Name*
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='given-name'
                    className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
                  />
                </div>
              </div>
              {/* Phone */}
              <div>
                <div className='flex justify-between'>
                  <label
                    htmlFor='phone'
                    className='block text-md font-medium text-white'>
                    Phone*
                  </label>
                </div>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    autoComplete='tel'
                    className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
                    aria-describedby='phone-optional'
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-md font-medium text-white'>
                  Email*
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    autoComplete='email'
                    className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
                  />
                </div>
              </div>
              {/* Services */}
              <div>
                <label
                  htmlFor='services'
                  className='block text-md font-medium text-white'>
                  Services
                </label>

                <div className='mt-1'>
                  <select
                    name='services'
                    id='services'
                    className='py-3.5 px-4 block w-full h-12 shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'>
                    <option>Demolition</option>
                    <option>Land Clearing</option>
                    <option>Excavation</option>
                    <option>Debris Cleanup</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              {/* Message */}
              <div className='sm:col-span-2'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='message'
                    className='block text-md font-medium text-white'>
                    Message
                  </label>
                </div>
                <div className='mt-1'>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300'
                    aria-describedby='message-max'
                    defaultValue={''}
                  />
                </div>
                <div className='mt-4'>
                  <Recaptcha
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    render='explicit'
                    onloadCallback={recaptchaLoaded}
                    verifyCallback={verifiedRecaptcha}
                  />
                </div>
              </div>
              <div className='sm:col-span-2 sm:flex sm:justify-start'>
                <button
                  type='submit'
                  className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent  shadow-black shadow-md  bg-blue-400 hover:bg-black text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto'>
                  Request a Free Estimate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
