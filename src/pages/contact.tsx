import Link from "next/link";
import Navbar from "../components/Navbar";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Footer from "~/components/Footer";

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-600">For inquiries, please reach out to us:</p>
          <div className="mt-4">
            <p className="text-gray-800 flex items-center">
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              <span className="font-bold mr-1">Email: </span> contact@travisdrilling.ca
            </p>
            <p className="text-gray-800 flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" />
              <Link href="tel:780-887-3498"><span className="font-bold mr-1">Phone: </span> (780) 974 - 3184 </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

