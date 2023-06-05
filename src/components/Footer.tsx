import React from 'react'

import Link from 'next/link'

function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Get a Quote
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Email us: {" "}
              <Link href="mailto:contact@travisdrilling.ca" className="underline">contact@travisdrilling.ca</Link>
            </h5>
            <div className="mt-6">

            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-bold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/about">About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/contact">Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">

              Copyright © {new Date().getFullYear()}{" "} by {" "}
              <Link
                href="https://github.com/Logan9312/Travis-Drilling"
                className="text-gray-600 hover:text-gray-900"
              >
                Logan Travis
              </Link>.
            </div>
            <div className=" text-gray-600 font-semibold py-1 ">
              <Link href="https://github.com/Logan9312/Travis-Drilling" passHref target="_blank" className="hover:text-gray-900">
                <i className="flex fab fa-github fa-xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer