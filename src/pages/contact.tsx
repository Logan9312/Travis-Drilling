import Navbar from "../../components/Navbar";
import BottomInfoBar from "../../components/infobar";

const Contact: React.FC = () => {

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col justify-center items-center">
                <p className="text-black">Contact Page</p>
            </div>
            <BottomInfoBar />
        </div>
    )
};

export default Contact;