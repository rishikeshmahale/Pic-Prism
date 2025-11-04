import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiMenu3Fill } from "react-icons/ri";
import { toggleSidebar } from "../../store/slices/navSlice.js";
import { IoClose } from "react-icons/io5";

const DashboardHeader = () => {
  const { author, role } = useSelector((state) => state.auth);
  const { sidebar } = useSelector((state) => state.nav);

  const dispatch = useDispatch();

  return (
    <>
      <div className="my-5 mx-8">
        <h1 className="text-3xl font-bold">
          Hello {author?.charAt(0)?.toUpperCase() + author?.slice(1)}
        </h1>
        <p>Welcome to your {role} dashboard</p>
      </div>

      {/* Hamburger menu icon just for phone */}
      <RiMenu3Fill
        className={`${
          sidebar == true ? "hidden" : "block sm:hidden"
        } text-3xl absolute top-5 right-5`}
        onClick={() => dispatch(toggleSidebar())}
      />

      <IoClose
        className={`${
          sidebar == true ? "block sm:hidden" : "hidden"
        } text-3xl absolute top-5 right-5`}
        onClick={() => dispatch(toggleSidebar())}
      />
    </>
  );
};

export default DashboardHeader;
