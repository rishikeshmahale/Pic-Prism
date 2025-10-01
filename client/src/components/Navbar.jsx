import { Link } from "react-router-dom";
import Home from "../pages/Home";
import HeroSection from "./HeroSection";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 fixed left-0 top-0 right-0 shadow-md gap-1 sm:gap-0 z-30 bg-white">
      {/* Logo and site name */}

      <div className="flex justify-between items-center">
        <img src="/picprismlogo.png" alt="logo" className="w-[50px]" />
        <Link to={"/login"} className="font-bold text-3xl">
          PicPrism
        </Link>
      </div>

      {/* list of other tabs */}

      <ul className="flex gap-5 text-lg font-semibold text-gray-400 ml-5 sm:ml-0">
        <Link to={"/about"} className="hover:text-black cursor-pointer sm:p-2">
          About
        </Link>
        <Link
          to={"/contact"}
          className="hover:text-black cursor-pointer sm:p-2"
        >
          Contact
        </Link>
        <Link to={"/login"} className="hover:text-black cursor-pointer sm:p-2">
          Log In
        </Link>
        <Link to={"/signup"} className="hover:text-black cursor-pointer sm:p-2">
          Sign up
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;