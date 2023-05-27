import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ul style={{ listStyle: 'none', display: 'flex', color: 'black' }}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </ul>
    </nav>
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
