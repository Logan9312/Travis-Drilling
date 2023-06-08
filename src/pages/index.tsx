import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const IndexPage = () => (
  <Layout title="Travis Drilling">

    <Hero />
    <Services />

    <Team />
    <Finisher />

  </Layout>
)

export default IndexPage

/// Page Sections
const Hero = () => (<div className="relative flex content-center items-center justify-center md:min-h-[75vh] min-h-[50vh]">
  <div className="absolute top-0 w-full h-full bg-bottom bg-cover bg-no-repeat lg:bg-[url('/img/rig.jpg')] bg-[url('/img/rig_cropped.jpg')]" >
    <span id="blackOverlay" className="w-full h-full absolute opacity-40 bg-black"></span>
  </div>
  <div className="container relative mx-auto">
    <div className="items-center flex flex-wrap">
      <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
        <h1 className=" text-white font-semibold text-4xl lg:text-5xl">
          Travis Drilling LTD.
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Water Well Drilling and Service
        </p>
      </div>
    </div>
  </div>
</div>)

const Services = () => <section className="pb-20 bg-gray-300 lg:-mt-24 -mt-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-end">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
              <i className="fas fa-screwdriver-wrench"></i>
            </div>
            <h6 className="text-xl font-semibold">Service, Repair, Testing</h6>
            <p className="mt-2 mb-4 text-gray-600">
              We can do service calls to repair your well, pump, or pressure system. We also offer water testing services to ensure your water is safe to drink.
            </p>
          </div>
        </div>
      </div>

      <div className=" pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
              <i className="fas fa-droplet"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Abandonment, Shocking
            </h6>
            <p className="mt-2 mb-4 text-gray-600">
              If you have an old well that you need abandoned, we can seal it up safely and properly. We also offer well shocking services to help clean out your well and get rid of any bacteria that may be present.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-400">
              <i className="fas fa-helmet-safety"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Backhoe Services
            </h6>
            <p className="mt-2 mb-4 text-gray-600">
              We offer some backhoe services, including: trenching, water line installation, underground water line repair, and more.
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-wrap items-center mt-10">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          More Information
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">

        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          To discuss your drilling needs or get a quote on services, you can contact us at the following:
        </p>
        <p className="text-gray-800 flex items-center">
          <EnvelopeIcon className="w-5 h-5 mr-2" />
          <Link href="mailto:contact@travisdrilling.ca"><span className="font-bold mr-1">Email: </span> contact@travisdrilling.ca </Link>
        </p>
        <p className="text-gray-800 flex items-center">
          <PhoneIcon className="w-5 h-5 mr-2" />
          <Link href="tel:780-974-3184"><span className="font-bold mr-1">Phone: </span> (780) 974 - 3184 </Link>
        </p>
      </div>
    </div>
  </div>
</section>



const Team = () => <section className="pt-10 pb-20">
  <div className="justify-center container mx-auto px-4">
    <div className="flex flex-wrap justify-center text-center mb-24">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-semibold">
          Our Team
        </h2>
      </div>
    </div>
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <Image
            width="100"
            height="100"
            alt="..."
            src={'/img/Jason.jpg'}
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">
              Jason Travis
            </h5>
            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
              Owner
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <Image
            width="100"
            height="100"
            alt="..."
            src={'/img/blank.png'}
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">
              Christy Travis
            </h5>
            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <Image
            width="100"
            height="100"
            alt="..."
            src='/img/blank.png'
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">
              Hayden Borle
            </h5>
            <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">

            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

const Finisher = () => <section className="pb-20 relative block bg-gray-900">

  <div className="container mx-auto px-4 pt-20">
    <div className="flex flex-wrap text-center justify-center">
      <div className="w-full lg:w-6/12 px-4">
        <h2 className="text-4xl font-semibold text-white">
          Why Us?
        </h2>
        <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
          We are dedicated to providing the best service to you, we appreciate your business and we hope to continue to work with you for years to come.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap mt-12 justify-center">
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-medal text-xl"></i>
        </div>
        <h6 className="text-xl mt-5 font-semibold text-white">
          Locally Owned
        </h6>
        <p className="mt-2 mb-4 text-gray-400">
          We are a locally operated business working out of Onoway, Alberta.
        </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-poll text-xl"></i>
        </div>
        <h5 className="text-xl mt-5 font-semibold text-white">
          Support
        </h5>
        <p className="mt-2 mb-4 text-gray-400">
          We will support and discuss options with you to produce results that you are looking for.
        </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-lightbulb text-xl"></i>
        </div>
        <h5 className="text-xl mt-5 font-semibold text-white">
          Reputation
        </h5>
        <p className="mt-2 mb-4 text-gray-400">
          Our business has grown through word of mouth, and positive recommendations.
        </p>
      </div>
    </div>
  </div>
</section>

