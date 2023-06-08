import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon } from '@heroicons/react/24/solid'

interface Props {
  transparent?: boolean
}

function Navbar(props: Props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full" : "relative bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            href="/">
            <Image
              src={(props.transparent ? "/img/logo_white.png" : "/img/logo.png")}
              width={100}
              height={100}
              alt="Travis Drilling Logo"
              className=" font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            />
          </Link>

          <Link
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " title-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href="/"
          />
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Bars3Icon className={(props.transparent ? "text-white" : "text-gray-800") + " h-6 w-6"} />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-4 py-4 lg:py-4 flex items-center text-xs uppercase font-bold"
                }
                href="/"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " fas fa-house text-lg leading-lg mr-2"
                  }
                />{" "}
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-4 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/about"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />{" "}
                About
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-4 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/contact"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-address-card text-lg leading-lg "
                  }
                />
                <span className="inline-block ml-2">Contact</span>
              </Link>
            </li>

            {/*<li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-4 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/resources"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-folder-open text-lg leading-lg "
                  }
                />
                <span className="inline-block ml-2">Resources</span>
              </Link>
            </li>*/}
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {/* right side navbar items */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar