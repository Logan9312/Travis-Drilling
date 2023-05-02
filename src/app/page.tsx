import Navbar from '../../components/Navbar';
import Logo from '../../components/Logo';

const Home = () => {
  return (
    <div style={{ color: 'black' , backgroundColor: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Company Logo" style={{ width: '100px', marginRight: '20px' }} />
        <Navbar />
      </div>
      <h1>Welcome to my website!</h1>
      <p>This is a simple Next.js homepage with a navigation bar and a company logo.</p>
    </div>
  );
};

export default Home;
