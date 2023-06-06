import Footer from "~/components/Footer";
import Navbar from "../components/Navbar";

const Resources: React.FC = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="mt-8 text-center">
                    Page Under Construction. Business Resources will be added here.
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Resources;
