import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Sidebar from "./Sidebar";

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
          <div className="overflow-y-scroll h-screen m-auto justify-center w-full pt-4">
            <main className=" m-auto mt-4 justify-center w-1/2 pt-4">
              <title>
                {pageTitle} | {data.site.siteMetadata.title}
              </title>
              <header className="border-b-2 border-green-700 text-white text-5xl font-bold pb-8 ">
                {data.site.siteMetadata.title}
              </header>
              <h1 className="border-b-2 border-green-700 text-white text-2xl text-left pt-4 pb-4">
                {pageTitle}
              </h1>
              <p className="overflow-y-scroll">{children}</p>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
