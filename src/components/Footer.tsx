import React from "react";

import Link from "next/link";

function Footer() {
  return (
    <footer className="min-w-full bg-gray-300 pb-6 pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-3xl font-semibold">Inquiries/Estimates</h4>
            <h5 className="mb-2 mt-0 text-lg text-gray-700">
              Email:{" "}
              <Link
                href="mailto:contact@travisdrilling.ca"
                className="underline"
              >
                contact@travisdrilling.ca
              </Link>
            </h5>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-gray-600">
              Copyright © {new Date().getFullYear()} by{" "}
              <Link
                href="https://github.com/Logan9312/Travis-Drilling"
                className="text-gray-600 hover:text-gray-900"
              >
                Logan Travis
              </Link>
              .
            </div>
            <div className=" py-1 font-semibold text-gray-600 ">
              <Link
                href="https://github.com/Logan9312/Travis-Drilling"
                passHref
                target="_blank"
                className="hover:text-gray-900"
              >
                <i className="fab fa-github fa-xl flex"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
