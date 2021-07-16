import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import me from '../public/me.jpg'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Ctext%20y%3D%22.9em%22%20font-size%3D%2290%22%3E%F0%9F%91%8B%3C%2Ftext%3E%3C%2Fsvg%3E"
          type="image/svg+xml"
        />
      </Head>
      <DefaultSeo
        openGraph={{
          url: 'https://www.jamesmiddleton.me/',
          title: 'James Middleton',
          description:
            "❤️🌐 · I'm James. I help people to build intuitive and immersive solutions on the web.",
          images: [
            {
              url: me.src,
              width: me.width,
              height: me.height,
              alt: 'James Middleton',
            },
          ],
          locale: 'en_GB',
          site_name: 'James Middleton',
        }}
        twitter={{
          handle: '@james2mid',
          site: '@james2mid',
          cardType: 'summary_large_image',
        }}
      />

      <Component {...pageProps} />
    </>
  )
}

export default App
