import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { IoIosHeart, IoMdPhotos } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { FaList } from "react-icons/fa";

import { setTab } from "../../store/slices/navSlice.js";
import { logout } from "../../store/slices/authSlice.js";

import { toast} from "react-hot-toast";

const DashboardSidebar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { author } = useSelector((state) => state.auth);
  const { sidebar, tab } = useSelector((state) => state.nav);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfull");
    navigate("/login");
  };

  return (
    <nav
      className={`fixed z-10 ${
        !sidebar == true
          ? "-translate-x-[500px] sm:translate-x-0"
          : "translate-x-0"
      } ease-in-out duration-300 flex sm:static text-lg font-semibold bg-white shadow-lg flex-col gap-2 p-3 w-fit min-h-screen list-none justify-between items-center`}
    >
      {/* DashboardSidebar */}
      <div>
       <div className="bg-black my-5 w-fit rounded-full py-4 px-6 text-white">
          {author && author.charAt(0).toUpperCase()}
        </div>

        {/* list items */}

        <div className="flex flex-col gap-2">
          {pathname === "/seller/profile" ? (
            <li
              className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${
                tab == "photos-management" && "bg-black text-white"
              }`}
              onClick={() => dispatch(setTab("photos-management"))}
            >
              <IoMdPhotos /> Photo Management
            </li>
          ) : (
            <li
              className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${
                tab === "Photos Purchased" && "bg-black text-white"
              }`}
              onClick={() => dispatch(setTab("Photos Purchased"))}
            >
              <IoMdPhotos /> Photos Purchased
            </li>
          )}

          <li
            className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${
              tab == "analytics" && "bg-black text-white"
            }
            `}
            onClick={() => dispatch(setTab("analytics"))}
          >
            <SiGoogleanalytics /> Analytics
          </li>

          <li
            className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${
              tab === "Orders" && "bg-black text-white"
            } `}
            onClick={() => dispatch(setTab("Orders"))}
          >
            <FaList /> Orders
          </li>

          <li
            className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${
              tab === "Favourites" && "bg-black text-white"
            } `}
            onClick={() => dispatch(setTab("Favourites"))}
          >
            <IoIosHeart /> Favourites
          </li>

          <li
            className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center ${
              tab === "Home" && "bg-black text-white"
            } `}
            onClick={() => dispatch(setTab("Home"))}
          >
            <AiFillHome /> Home
          </li>
        </div>
      </div>

      {/* logout button*/}

      <li
        className="w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center"
        onClick={handleLogout}
      >
        <IoLogOut /> Logout
      </li>
    </nav>
  );
};

export default DashboardSidebar;
