
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" 
 p-4">
      <ul className="flex space-x-9 text-black md:justify-end my-5 mx-11 text-xl font-inter ">
        <li>
          <Link href="/" className="hover:text-customPink font-inter">
            Works
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-customPink">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-customPink">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
