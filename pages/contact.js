import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Recaptcha from 'react-recaptcha'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const navigation = {
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

export default function ContactPage() {
  const [recaptchaLoad, setRecaptchaLoad] = React.useState(false)
  const [isVerified, setIsVerified] = React.useState(false)
  const form = useRef()

  function fun() {
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
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
      e.target.email.value === '' ||
      e.target.phone.value === '' ||
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
          'template_0eplzf7',
          form.current,
          'user_caJdcyqxekjliAG0lX1Wk'
        )
        .then(
          (result) => {
            toast('🎉 Message sent!', {
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
    <Layout title={'Ultra Demolition | Demolition Contractor | Contact'}>
      {/* Hero */}
      <div className='relative bg-white h-3/4 py-40'>
        <div className='absolute inset-0'>
          <Image
            className='w-full h-full object-cover'
            src='/images/contact/7-contact-hero.webp'
            layout='fill'
            objectFit='cover'
            priority={true}
            placeholder='blur'
            blurDataURL
            alt='Get in Touch With Us'
          />
          <div
            className='absolute inset-0 bg-gray-300 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto md:mt-24 py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          {/* <h1 className='text-4xl font-extrabold tracking-wide text-white sm:text-5xl lg:text-5xl text-center'>
            Demolition Services
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
          </p> */}
        </div>
      </div>

      {/* Form Section */}
      <div className='bg-blue-500'>
        <div className='max-w-7xl mx-auto lg:px-8'>
          <div className='relative bg-blue-500 '>
            <h2 className='sr-only'>Contact us</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
              {/* Contact form */}
              <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 lg:order-first order-last'>
                <h2 className='text-2xl font-extrabold text-white'>
                  <span className='block'>Get In Touch With Us</span>
                </h2>
                <p className='mt-4 text-lg leading-6 text-white source-styles'>
                  Please fill out this short form and we&apos;ll contact you
                  shortly.
                </p>
                <form
                  action='#'
                  method='POST'
                  className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                  ref={form}
                  onSubmit={sendEmail}>
                  {/* Name */}
                  <div className='col-span-2'>
                    <label
                      htmlFor='name'
                      className='block text-md font-medium text-white'>
                      Name:
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

                  {/* Email */}
                  <div className='col-span-2 md:col-span-1'>
                    <label
                      htmlFor='email'
                      className='block text-md font-medium text-white'>
                      Email:
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
                  {/* Phone */}
                  <div className='col-span-2 md:col-span-1'>
                    <label
                      htmlFor='phone'
                      className='block text-md font-medium text-white'>
                      Phone:
                    </label>
                    <div className='mt-1'>
                      <input
                        id='phone'
                        name='phone'
                        type='phone'
                        autoComplete='tel'
                        className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'
                      />
                    </div>
                  </div>
                  {/* Message */}
                  <div className='col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='message'
                        className='block text-md font-medium text-white'>
                        Message:
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
                      className='mt-2 w-full inline-flex items-center justify-center px-10 py-2 border border-transparent  shadow-black shadow-md  bg-blue-400 hover:bg-black text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto'>
                      Reach Out to Us
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact information */}
              <div className='relative overflow-hidden py-10 px-6 text-center bg-black-rgba sm:px-10 xl:p-12 order-first lg:-order-1'>
                <h3 className='text-lg font-medium text-white'>Serving</h3>
                <ul className='mt-6 text-base text-white max-w-3xl space-y-1 mx-auto'>
                  <li>Silsbee, TX</li>
                  <li>Lumberton, TX</li>
                  <li>Beaumont, TX</li>
                  <li>Port Arthur, TX</li>
                  <li>Nederland, TX</li>
                  <li>Orange, TX</li>
                  <li>Vidor, TX</li>
                  <li>Groves, TX</li>
                  <li>Buna, TX</li>
                  <li>Jasper, TX</li>
                  <li>Kirbyville, TX</li>
                </ul>

                <ul className='mt-6 text-base text-white max-w-3xl space-y-1 mx-auto'>
                  <li>Main: (409) 812-6292</li>
                  <li>Local: (409) 812-6292</li>
                  <li>Alternate: (409) 504-2241</li>
                  <li>
                    <a
                      href='mailto:ultrademolitiontx@gmail.com'
                      target='_blank'
                      rel='noreferrer'>
                      ultrademolitiontx@gmail.com
                    </a>
                  </li>
                </ul>
                <div className='py-2'>
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='text-blue-500 hover:text-blue-400'
                      target='_blank'
                      rel='noreferrer'>
                      <span className='sr-only'>{item.name}</span>
                      <item.icon
                        className='h-12 w-12 mx-auto'
                        aria-hidden='true'
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
