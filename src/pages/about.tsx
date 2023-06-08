import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const About: React.FC = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col justify-center items-center">
                <p className="text-black">Travis Drilling Ltd. is a locally owned and operated business in Alberta, Canada.</p>
                <Image
                    src={"/img/rig.jpg"}
                    alt={"Drilling Rigs"}
                    width={1000}
                    height={500}
                />
            </div>
            <Footer />
        </div>

    )
};

export default About;