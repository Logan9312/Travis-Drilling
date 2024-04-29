import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Layout from "~/components/Layout";

export default function Page() {
  return (
    <Layout transparent={false}>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
          <p className="text-left text-gray-600">
            <strong>For inquiries, contact us at:</strong>
          </p>
          <div className="">
            <p className="flex items-center text-gray-800">
              <EnvelopeIcon className="mr-2 h-5 w-5" />
              <Link href="mailto:contact@travisdrilling.ca">
                <span className="mr-1 font-bold">Email: </span>{" "}
                contact@travisdrilling.ca
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
    </Layout>
  );
}
