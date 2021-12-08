// Step 1: Import React
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import MyTools from "../components/MyTools";
// Step 2: Define your component
const AboutPage = ({ data }) => {
  const url = data.allYoutubeVideo.edges[0].node.thumbnail.url;
  return (
    <Layout pageTitle="About Me">
      <div className="px-4 pt-6 text-center text-xl mb-10">
        <p>Hi there! I'm the creator of this website.</p>
        <p>You can learn more about me on this page !</p>
      </div>
      <hr className="border-2 border-green-700 w-1/5 m-auto" />
      <div className="sm:flex-col md:flex md:flex-row m-auto h-2/3 mb-10 ">
        <div className="m-auto h-2/3 sm:w-5/6 md:w-1/2 p-4 ">
          <p className=" pt-4 text-xl text-left">
            I currently study in Calais at the IUT to validate my bachelor's
            degree in internet and mobile development
          </p>
        </div>

        <StaticImage
          className="border-purple-400 border-4 w-3/5 h-2/3 md:w-2/5 md:h-2/5 m-auto my-4 "
          src="../images/IUT.jpg"
          alt={""}
        />
      </div>
      <hr className="border-2 border-green-700 w-1/5 sm:w-1/2  m-auto sm:my-8" />
      <div className="sm:flex-col md:flex md:flex-row text-xl m-auto h-2/3 mb-10">
        <img
          className="  border-purple-400 border-4 w-3/5 h-2/3 md:w-2/5 md:h-2/5 m-auto  my-4"
          src={url}
          alt=""
        />

        <div className="m-auto h-2/3 sm:w-5/6 md:w-1/2 p-4 text-left">
          <p>
            My main focus is around the JavaScript ecosystem and mainly React.
          </p>
          <p className=" pt-4 text-xl">
            My challenge these days is growing a youtube channel to 100 of
            followers.With my mentor David Leuliette we do the Pirate Office
            Hours Show
          </p>
          <div className="mt-8 m-auto items-center">
            <a
              href="https://www.youtube.com/channel/UCO0X5b0mQ4eIHitXHXSFUyw"
              className="flex-col relative w-24 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-purple-400 hover:border-purple-400 hover:bg-purple-400 hover:text-white shadow-md p-4   items-center justify-center"
            >
              Discover the channel
            </a>
          </div>
        </div>
      </div>
      <div className="text-xl">
        <hr className="border-2 border-green-700 w-1/5 m-auto" />
      </div>

      <MyTools />
    </Layout>
  );
};
export const query = graphql`
  query MyQuery {
    allYoutubeVideo {
      edges {
        node {
          thumbnail {
            url
          }
        }
      }
    }
  }
`;
// Step 3: Export your component
export default AboutPage;
