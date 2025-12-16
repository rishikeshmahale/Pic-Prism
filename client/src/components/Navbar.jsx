import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "../../store/slices/authSlice.js";
import { useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const { pathname } = useLocation();

  const { isAuthenticated, role } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  
  const refresh = async () => {
    try{

      const res = await axios.get(import.meta.env.VITE_API_URL + "/refresh", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("refreshToken")
        }
      });

      const data = await res.data;

      dispatch(login(data));

      console.log("Refresh Token Generated and User directed to respective profile")

    } catch (error) {
      console.log("Error from server : ", error);
      dispatch(logout());
    }
  }
  
  useEffect(() => {

    const interval = setTimeout(() => {
      refresh()
    }, 1000 * 60 * 13);
      // 1000 ms => 1s * 60 => 60sec or 1 min * 13 => 13 min
    return () => {
      clearInterval(interval);
    }
    
  }, []);



  return (
    <nav
      className={`flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 ${
        pathname === "/seller/profile" || pathname === "/buyer/profile"
          ? "hidden"
          : "fixed"
      } left-0 top-0 right-0 shadow-md gap-1 sm:gap-0 z-30 bg-white`}
    >
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

        {!isAuthenticated ? (
          <>
            <Link
              to={"/login"}
              className="hover:text-black cursor-pointer sm:p-2"
            >
              Log In
            </Link>
            <Link
              to={"/signup"}
              className="hover:text-black cursor-pointer sm:p-2"
            >
              Sign up
            </Link>
          </>
        ) : (
          <Link
            to={`/${role}/profile`}
            className="hover:text-black cursor-pointer sm:p-2"
          >
            Profile
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
