import { FaGithub, FaTwitter } from 'react-icons/fa'
import me from '../public/me.jpg'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 py-5 space-y-10 select-none sm:space-y-24 md:p-10 bg-gray-50">
      <div className="flex flex-col items-center justify-center space-y-16 text-center sm:space-y-20 md:space-y-0 md:space-x-20 md:flex-row md:text-left">
        <img
          src={me.src}
          className="w-56 border-8 border-white rounded-full shadow-2xl md:w-80"
        />

        <div className="space-y-6 rounded-lg">
          <div className="space-y-3">
            <p className="text-3xl font-medium">I'm James 👋</p>

            <p className="text-xl">
              I create immersive experiences on the web.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-block px-4 py-2 text-lg text-white transition duration-300 bg-blue-500 rounded-md shadow-md transform-gpu hover:shadow-lg hover:scale-105"
          >
            Hire Me
          </a>
        </div>
      </div>

      <div className="space-x-5 text-center">
        <a href="https://twitter.com/james2mid" target="_blank">
          <FaTwitter className="inline-block w-10 h-10 text-gray-400 transition-colors duration-300 hover:text-gray-500" />
        </a>
        <a href="https://github.com/james2mid" target="_blank">
          <FaGithub className="inline-block w-10 h-10 text-gray-400 transition-colors duration-300 hover:text-gray-500" />
        </a>
      </div>
    </div>
  )
}

export default Home
