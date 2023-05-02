import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul style={{ listStyle: 'none', display: 'flex', color: 'black' }}>
        <li style={{ margin: '0 10px' }}>
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/about" passHref>
            About
          </Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/contact" passHref>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
