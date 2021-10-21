import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const SlidesPage = () => {
  return (
    <Layout>
      <div className="sm:flex-col md:flex md:flex-row m-auto h-2/3 mt-10 mb-10 ">
        <div className="m-auto h-2/3 sm:w-5/6 md:w-1/2 p-4 ">
          <p className=" pt-4 text-xl text-left">
            Discover my Gatsby v4 presentation
          </p>
          <div className="mt-8 flex-col m-auto relative w-24 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-purple-400 hover:border-purple-400 hover:bg-purple-400 hover:text-white shadow-md py-2  items-center justify-center">
            <a
              href="https://matthysd-gatsby-slide.netlify.app/#0"
              rel="noreferrer"
              target="_blank"
            >
              See
            </a>
          </div>
        </div>

        <StaticImage
          className="border-purple-400 border-4 w-2/3 h-2/3 md:w-2/5 md:h-2/5 m-auto"
          src="https://miro.medium.com/max/724/1*SQdK1oLDvGecynYvKDKzzQ.png"
        />
      </div>
      <hr className="border-2 border-green-700 w-1/5 m-auto" />
    </Layout>
  );
};

export default SlidesPage;
