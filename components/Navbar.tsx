import Link from 'next/link'; 
import Image from 'next/image'; 

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <Image
        src="/logo.png"
        alt="Travis Drilling Logo"
        width={100}
        height={100}
      />

      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" passHref>
              <span className="cursor-pointer text-black">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span className="cursor-pointer text-black">About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span className="cursor-pointer text-black">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
