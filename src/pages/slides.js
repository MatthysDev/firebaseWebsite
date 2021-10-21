import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const SlidesPage = () => {
  return (
    <Layout>
      <div className="sm:flex-col md:flex md:flex-row m-auto h-2/3 mt-10 mb-10 ">
        <div className="m-auto h-2/3 sm:w-5/6 md:w-1/2 p-4 ">
          <p className="text-center pt-4 text-left pl-2 pb-4 text-gray-400 hover:text-purple-400 text-2xl">
            <a
              href="https://matthysd-gatsby-slide.netlify.app/#0"
              rel="noreferrer"
              target="_blank"
            >
              Discover my Gatsby v4 presentation
            </a>
          </p>
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
