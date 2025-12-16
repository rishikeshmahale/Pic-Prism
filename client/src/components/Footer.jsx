import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-semibold">MyWebsite</h1>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>

        {/* Right Side */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">Home</a>
          <a href="#" className="text-gray-400 hover:text-white">About</a>
          <a href="#" className="text-gray-400 hover:text-white">Services</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
