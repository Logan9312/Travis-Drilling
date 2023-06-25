import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

const IndexPage: React.FC = () => (
  <Layout transparent>
    <Hero />
    <Services />

    <Team />
    <Finisher />
  </Layout>
);

export default IndexPage;

/// Page Sections
const Hero = () => (
  <div className="relative flex min-h-[50vh] content-center items-center justify-center md:min-h-[75vh]">
    <div className="absolute top-0 h-full w-full bg-[url('/img/rig_cropped.jpg')] bg-cover bg-bottom bg-no-repeat lg:bg-[url('/img/rig.jpg')]">
      <span
        id="blackOverlay"
        className="absolute h-full w-full bg-black opacity-40"
      ></span>
    </div>
    <div className="container relative mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
          <h1 className=" text-4xl font-semibold text-white lg:text-5xl">
            Travis Drilling LTD.
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Water Well Drilling and Service
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => (
  <section className="-mt-12 bg-gray-300 pb-20 lg:-mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-end">
        <div className="w-full px-4 pt-6 text-center md:w-4/12 ">
          <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="mb-5 inline-flex w-12 items-center justify-center rounded-full bg-red-400  p-3 text-center text-white shadow-lg">
                <i className="fas fa-screwdriver-wrench"></i>
              </div>
              <h6 className="text-xl font-semibold">
                Service, Repair, Testing
              </h6>
              <p className="mb-4 mt-2 text-gray-600">
                We can repair your well, pump, or pressure system through
                service calls. We also have water testing services to ensure the
                safety of your drinking water.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full px-4 pt-6 text-center md:w-4/12">
          <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 p-3 text-center text-white shadow-lg">
                <i className="fas fa-droplet"></i>
              </div>
              <h6 className="text-xl font-semibold">Abandonment, Shocking</h6>
              <p className="mb-4 mt-2 text-gray-600">
                If you have an old well that you need abandoned, we can seal it
                up safely and properly. We also offer well shocking services to
                help clean out your well and get rid of any bacteria that may be
                present.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
          <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 p-3 text-center text-white shadow-lg">
                <i className="fas fa-helmet-safety"></i>
              </div>
              <h6 className="text-xl font-semibold">Backhoe Services</h6>
              <p className="mb-4 mt-2 text-gray-600">
                Our backhoe services include trenching, installation and repair
                of underground water lines, and more. Call us to discuss if we
                can do what you need.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
          <h3 className="mb-2 text-3xl font-semibold leading-normal">
            More Information
          </h3>
          <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-gray-700"></p>
          <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-gray-700">
            To discuss your drilling needs or get a quote on services, you can
            contact us at the following:
          </p>
          <p className="flex items-center text-gray-800">
            <EnvelopeIcon className="mr-2 h-5 w-5" />
            <Link href="mailto:contact@travisdrilling.ca">
              <span className="mr-1 font-bold">Email: </span>{" "}
              contact@travisdrilling.ca{" "}
            </Link>
          </p>
          <p className="flex items-center text-gray-800">
            <PhoneIcon className="mr-2 h-5 w-5" />
            <Link href="tel:780-974-3184">
              <span className="mr-1 font-bold">Phone: </span> (780) 974 - 3184{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section className="pb-20 pt-10">
    <div className="container mx-auto justify-center px-4">
      <div className="mb-24 flex flex-wrap justify-center text-center">
        <div className="w-full px-4 lg:w-6/12">
          <h2 className="text-4xl font-semibold">Our Team</h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
          <div className="px-6">
            <Image
              width="100"
              height="100"
              alt="..."
              src={"/img/blank.png"}
              className="mx-auto max-w-full rounded-full shadow-lg"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Jason Travis</h5>
              <p className="mt-1 text-sm font-semibold uppercase text-gray-500">
                Owner
              </p>
            </div>
          </div>
        </div>
        <div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
          <div className="px-6">
            <Image
              width="100"
              height="100"
              alt="..."
              src={"/img/blank.png"}
              className="mx-auto max-w-full rounded-full shadow-lg"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Christy Travis</h5>
              <p className="mt-1 text-sm font-semibold uppercase text-gray-500"></p>
            </div>
          </div>
        </div>
        <div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
          <div className="px-6">
            <Image
              width="100"
              height="100"
              alt="..."
              src="/img/blank.png"
              className="mx-auto max-w-full rounded-full shadow-lg"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Hayden Borle</h5>
              <p className="mt-1 text-sm font-semibold uppercase text-gray-500"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Finisher = () => (
  <section className="relative block bg-gray-900 pb-20">
    <div className="container mx-auto px-4 pt-20">
      <div className="flex flex-wrap justify-center text-center">
        <div className="w-full px-4 lg:w-6/12">
          <h2 className="text-4xl font-semibold text-white">Why Us?</h2>
          <p className="mb-4 mt-4 text-lg leading-relaxed text-gray-400">
            We are dedicated to providing the best service to you, we appreciate
            your business and we hope to continue to work with you for years to
            come.
          </p>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-center">
        <div className="w-full px-4 text-center lg:w-3/12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg">
            <i className="fas fa-medal text-xl"></i>
          </div>
          <h6 className="mt-5 text-xl font-semibold text-white">
            Locally Owned
          </h6>
          <p className="mb-4 mt-2 text-gray-400">
            We are a locally operated business working out of Onoway, Alberta.
          </p>
        </div>
        <div className="w-full px-4 text-center lg:w-3/12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg">
            <i className="fas fa-poll text-xl"></i>
          </div>
          <h5 className="mt-5 text-xl font-semibold text-white">Support</h5>
          <p className="mb-4 mt-2 text-gray-400">
            We will support and discuss options with you to produce results that
            you are looking for.
          </p>
        </div>
        <div className="w-full px-4 text-center lg:w-3/12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg">
            <i className="fas fa-lightbulb text-xl"></i>
          </div>
          <h5 className="mt-5 text-xl font-semibold text-white">Reputation</h5>
          <p className="mb-4 mt-2 text-gray-400">
            Our business has grown through word of mouth, and positive
            recommendations.
          </p>
        </div>
      </div>
    </div>
  </section>
);
