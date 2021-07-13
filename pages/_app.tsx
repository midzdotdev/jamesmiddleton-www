import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import me from '../public/me.jpg'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        openGraph={{
          url: 'https://www.jamesmiddleton.me/',
          title: 'James Middleton',
          description:
            '👨❤️🌐 · I help people create incredible experiences on the web.',
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
