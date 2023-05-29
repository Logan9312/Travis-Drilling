import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (

    <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
      <Image
        src="/logo.png"
        alt="Travis Drilling Logo"
        width={100}
        height={100}
      />
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
