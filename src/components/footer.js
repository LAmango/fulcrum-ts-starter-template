import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = props => {
  return (
    <footer className="pin-b bg-black">
      <div className="container mx-auto py-3">
        <div className="flex justify-center flex-wrap items-stretch">
          <div className="inline-flex">
            <FaFacebookF className="text-gray-500 mx-1 sm:mx-1 lg:mx-3 sm:w-5 lg:text-2xl" />
            <FaTwitter className="text-gray-500 mx-1 sm:mx-1 lg:mx-3 sm:w-5 lg:text-2xl" />
            <FaInstagram className="text-gray-500 mx-1 sm:mx-1 lg:mx-3 sm:w-5 lg:text-2xl" />
          </div>
          <div className="text-gray-500 w-full text-center mt-5">
            Design: <a href="https://fulcrumwebsites.com">Fulcrum DM</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
