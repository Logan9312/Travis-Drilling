import Link from 'next/link'; // Importing Link component from Next.js
import Image from 'next/image'; // Importing Image component from Next.js

// Navbar component
const Navbar: React.FC = () => {
  return (
    // Navbar container
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
      {/* Company logo */}
      <Image
        src="/logo.png"
        alt="Travis Drilling Logo"
        width={100}
        height={100}
      />
      {/* Navigation bar */}
      <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Navigation items */}
        <ul style={{ listStyle: 'none', display: 'flex', color: 'black' }}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </ul>
      </nav>
    </div>
  );
};

// Navigation item component
interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    // Navigation item
    <li style={{ margin: '0 10px' }}>
      {/* Link to the specified page */}
      <Link href={href} passHref>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;