"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

interface Props {
  transparent?: boolean;
}

export default function Navbar(props: Props) {
  if (usePathname().toString() === "/") {
    props.transparent = true;
  } else {
    props.transparent = false;
  }

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "absolute top-0 z-50 w-full"
          : "relative bg-white shadow-lg") +
        " mb-5 flex flex-wrap items-center justify-between px-2 py-3"
      }
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <Link href="/">
            <Image
              src={props.transparent ? "/img/logo_white.png" : "/img/logo.png"}
              width={100}
              height={100}
              alt="Travis Drilling Logo"
              className=" mr-4 inline-block whitespace-nowrap py-2 font-bold uppercase leading-relaxed"
            />
          </Link>

          <Link
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " title-lg mr-4 inline-block whitespace-nowrap py-2 font-bold uppercase leading-relaxed"
            }
            href="/"
          />
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Bars3Icon
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " h-6 w-6"
              }
            />
          </button>
        </div>
        <div
          className={
            "flex-grow items-center bg-white lg:flex lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="mr-auto flex list-none flex-col lg:flex-row">
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-600") +
                  " flex items-center px-4 py-4 text-xs font-bold uppercase lg:py-4"
                }
                href="/"
              >
                <i
                  className={
                    (props.transparent
                      ? "text-gray-500 lg:text-gray-300"
                      : "text-gray-500") +
                    " fas fa-house leading-lg mr-2 text-lg"
                  }
                />{" "}
                Home
              </Link>
            </li>
            {/* <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-4 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/About"
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
                </li>*/}
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-600") +
                  " flex items-center px-4 py-4 text-xs font-bold uppercase lg:py-2"
                }
                href="/Contact"
              >
                <i
                  className={
                    (props.transparent
                      ? "text-gray-500 lg:text-gray-300"
                      : "text-gray-500") +
                    " far fa-address-card leading-lg text-lg "
                  }
                />
                <span className="ml-2 inline-block">Contact</span>
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
            {/*<li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-4 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/services"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " fas fa-list text-lg leading-lg "
                  }
                />
                <span className="inline-block ml-2">Services</span>
              </Link>
            </li>*/}
          </ul>
          <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
            {/* right side navbar items */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
