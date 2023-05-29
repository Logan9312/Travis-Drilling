import Link from 'next/link';

const Navbar: React.FC = () => {
  return (

    <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
      <img src="logo.png" alt="Company Logo" style={{ width: '100px', marginRight: '20px' }} />


      <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ul style={{ listStyle: 'none', display: 'flex', color: 'black' }}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </ul>
      </nav>
    </div>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <li style={{ margin: '0 10px' }}>
      <Link href={href} passHref>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
