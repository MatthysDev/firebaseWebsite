import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Sidebar from "./Sidebar";

const activeStyles = {
  color: "gray",
};

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="bg-black h-screen text-white">
      <div className="text-center m-auto font-sans">
        <div className="flex">
          <Sidebar />
          <main className="m-auto mt-4 justify-center w-1/2 pt-4">
            <title>
              {pageTitle} | {data.site.siteMetadata.title}
            </title>
            <header className="border-b-2 border-yellow-600 text-white text-5xl font-bold pb-8 ">
              {data.site.siteMetadata.title}
            </header>
            <h1 className="border-b-2 border-yellow-600 text-white text-2xl text-left pt-4 pb-4">
              {pageTitle}
            </h1>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
