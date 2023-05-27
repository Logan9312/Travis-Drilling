import Navbar from '../../components/Navbar';
import BottomInfoBar from 'components/infobar';

const Home = () => {
  return (
    <div style={{ color: 'black', backgroundColor: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Company Logo" style={{ width: '100px', marginRight: '20px' }} />
        <Navbar />
      </div>
      <h1>Travis Drilling</h1>
      <p>Water well drilling and maintenance</p>
      <BottomInfoBar />
    </div>

  );
};

export default Home;
