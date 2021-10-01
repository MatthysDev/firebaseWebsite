import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const activeStyles = {
  color: "orange",
};

const Sidebar = () => (
  <div className="m-auto md:m-0 md:w-full lg:w-72 p-8 pt-8 h-screen bg-black border-r-2 border-yellow-600 space-y-8">
    <div className="flex flex-col text-gray-500 text-2xl font-vida ">
      <StaticImage src="../images/logo.png" height="51px" />
    </div>

    <Link
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400"
      to="/"
      activeStyle={activeStyles}
    >
      Home
    </Link>
    <Link
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400"
      to="/about"
      activeStyle={activeStyles}
    >
      About
    </Link>
    <Link
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 py-4"
      to="/blog"
      activeStyle={activeStyles}
    >
      Blog
    </Link>

    <button class="relative w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-yellow-600 hover:border-yellow-600 hover:bg-yellow-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
      <span class="mx-auto">CV</span>
    </button>
  </div>
);

export default Sidebar;
