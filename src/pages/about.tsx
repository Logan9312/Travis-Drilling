import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Layout from "../components/Layout";

const About: React.FC = () => {
    return (
        <Layout title="Travis Drilling" transparent={false}>
            <div className="bg-white min-h-screen flex flex-col">

                <div className="flex-1 flex flex-col justify-center items-center">
                    <h3 className="text-3xl mb-2 font-semibold leading-normal text-center">
                        About Travis Drilling
                    </h3>
                    <p className="text-lg font-light text-center mt-4 mb-4 text-gray-700">
                        Travis Drilling is a locally owned business operating out of Onoway, Alberta. 
                    </p>
                </div>


            </div>
        </Layout>
    )
};

export default About;