import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const activeStyles = {
  color: " 	mediumpurple",
};

const Sidebar = () => (
  <div className="m-auto md:m-0 sm:w-full md:w-48 lg:w-72 p-8 pt-8 h-screen bg-black border-r-4 border-green-700 space-y-8">
    <div className="flex flex-col text-gray-500 text-2xl font-vida ">
      <StaticImage
        className="border-purple-400 border-4"
        src="../images/logo.png"
      />
    </div>

    <Link
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 hover:text-purple-400"
      to="/"
      activeStyle={activeStyles}
    >
      Home
    </Link>
    <Link
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 hover:text-purple-400"
      to="/about"
      activeStyle={activeStyles}
    >
      About
    </Link>
    <Link
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 py-4 hover:text-purple-400"
      to="/blog"
      activeStyle={activeStyles}
    >
      Blog
    </Link>

    <div className=" w-24 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-purple-400 hover:border-purple-400 hover:bg-purple-400 hover:text-white shadow-md py-2  inline-flex items-center justify-center">
      <a
        href="https://profuse-trader-ab8.notion.site/DUCROCQ-Matthys-10c4bc8d977c4fc1a8eb215cf0d7f69c"
        rel="noreferrer"
        target="_blank"
      >
        CV
      </a>
    </div>
    <div className=" w-24 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-purple-400 hover:border-purple-400 hover:bg-purple-400 hover:text-white shadow-md py-2  inline-flex items-center justify-center">
      <a
        href="https://www.linkedin.com/in/matthys-ducrocq-0182381b1/"
        rel="noreferrer"
        target="_blank"
      >
        Linkedin
      </a>
    </div>
  </div>
);

export default Sidebar;
