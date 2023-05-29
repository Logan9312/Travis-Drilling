import Navbar from '../../components/Navbar';
import BottomInfoBar from 'components/infobar';

const Home = () => {
  return (
    
    <div style={{ color: 'black', backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px' }}>Travis Drilling</h1>
        <p style={{ fontSize: '2rem', textAlign: 'center' }}>Water well drilling and maintenance</p>
      </div>
      <BottomInfoBar />
    </div>
  );
};

export default Home;