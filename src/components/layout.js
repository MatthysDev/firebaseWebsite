import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

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
      <div className="text-center m-auto font-sans w-3/4 pt-8">
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <header className="text-gray-600 text-5xl font-bold">
          {data.site.siteMetadata.title}
        </header>
        <nav className="flex justify-center text-white pt-8 pb-4 text-xl">
          <ul className="pl-0 flex list-none ">
            <li className="pr-2 ">
              <Link
                to="/"
                className="active:text-red"
                activeStyle={activeStyles}
              >
                Home
              </Link>
            </li>
            <li className="pr-2">
              <Link to="/about" activeStyle={activeStyles}>
                About
              </Link>
            </li>
            <li className="pr-2">
              <Link to="/blog" activeStyle={activeStyles}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className="text-gray-500">{pageTitle}</h1>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
