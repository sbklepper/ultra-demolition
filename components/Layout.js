import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import MobileSocialWidget from './MobileSocialWidget'
import SocialWidget from './SocialWidget'

function Layout({ children, description, keywords, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta
          property='og:image'
          content='https://ultra-demolition-sepia.vercel.app/images/demolition/2-demo-services-hero.webp'
        />
        <meta
          property='og:url'
          content='https://ultra-demolition-sepia.vercel.app'
        />
        <meta
          property='og:description'
          content='Get residential demolition, construction debris removal, and debris hauling from the professionals at Ultra Demolition. Call us today for a free estimate.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:alt' content='Demolition Services' />
        <meta
          name='twitter:title'
          content='Ultra Demolition | Demolition Contractor | Silsbee, TX'
        />
        <meta
          name='twitter:image'
          content='https://ultra-demolition-sepia.vercel.app'
        />
        <meta
          name='pinterest-rich-pin'
          content='https://ultra-demolition-sepia.vercel.app'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Source+Sans+Pro&display=swap'
          rel='stylesheet'
        />
        <script
          src='https://www.google.com/recaptcha/api.js?&render=explicit'
          async
          defer
        />
      </Head>
      <Header />
      <SocialWidget />
      <MobileSocialWidget />
      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'Ultra Demolition | Demolition Contractor | Silsbee, TX',
  description:
    'Get residential demolition, construction debris removal, and debris hauling from the professionals at Ultra Demolition. Call us today for a free estimate.',
  keywords:
    'Ultra Demolition, residential demolition, construction debris removal, professional debris hauling, free quote, free estimate, Silsbee, TX',
}
