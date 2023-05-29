import Navbar from '../../components/Navbar';
import BottomInfoBar from '../../components/infobar';

const Home: React.FC = () => {
  return (

    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-20">Travis Drilling</h1>
        <p className="text-2xl text-center">Water well drilling and maintenance</p>
        <p className="text-sm text-center"></p>
      </div>
      <BottomInfoBar />
    </div>
  );
};

export default Home;