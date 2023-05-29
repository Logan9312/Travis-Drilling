import Navbar from "components/Navbar";
import BottomInfoBar from "components/infobar";


export default function About() {
    return (
        <div style={{ color: 'black', backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                Contact Page
            </div>
            <BottomInfoBar />
        </div>
    )
};
