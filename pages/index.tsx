import { NextSeo } from 'next-seo'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import me from '../public/me.jpg'

const Home: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Home"
        description="I help people to build intuitive and immersive solutions on the web."
      />
      <div className="flex flex-col items-center justify-center min-h-screen px-5 py-5 space-y-24 select-none md:p-10 bg-gray-50">
        <main className="flex flex-col items-center justify-center space-y-16 text-center sm:space-x-0 lg:space-x-24 md:space-y-0 md:space-x-16 md:flex-row md:text-left">
          <div className="relative w-56 h-56 border-8 border-white rounded-full shadow-2xl md:w-72 md:h-72 p-auto">
            <Image
              src={me}
              priority
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              alt="Picture of James Middleton"
            />
          </div>

          <div className="space-y-6 rounded-lg">
            <div className="space-y-3">
              <p className="text-3xl font-medium">I&apos;m James &#x1F44B;</p>

              <p className="text-xl w-80">
                I help people to build intuitive and immersive solutions on the
                web.
              </p>
            </div>

            <a
              href="https://calendly.com/james-middleton/30-meet"
              className="inline-block px-4 py-2 text-lg font-semibold text-white transition duration-300 bg-blue-500 rounded-md shadow-md transform-gpu hover:shadow-lg hover:scale-105"
            >
              Hire Me
            </a>
          </div>
        </main>

        <div className="space-x-5 text-center">
          <a
            href="https://twitter.com/james2mid"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="inline-block w-10 h-10 text-gray-400 transition-colors duration-300 hover:text-gray-500" />
          </a>
          <a
            href="https://github.com/james2mid"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="inline-block w-10 h-10 text-gray-400 transition-colors duration-300 hover:text-gray-500" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
