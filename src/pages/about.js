// Step 1: Import React
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className=" px-4 pt-6 text-center text-xl mb-16">
        <p>Hi there! I'm the creator of this website.</p>
        <p>You can learn more about me on this page !</p>
      </div>
      <div className="flex m-auto h-2/3 mb-16 ">
        <div className="m-auto h-2/3 w-1/2 p-4 ">
          <p className=" pt-4 text-xl">
            I currently study in Calais at the IUT to validate my bachelor's
            degree in internet and mobile development
          </p>
        </div>

        <StaticImage
          className="border-purple-400 border-4 w-2/5 h-2/5 m-auto"
          src="../images/IUT.jpg"
        />
      </div>
      <div className="text-xl flex m-auto h-2/3 mb-16 ">
        <StaticImage
          className="border-purple-400 border-4 w-2/5 h-2/5 m-auto"
          src="../images/minia.png"
        />
        <div className="m-auto h-2/3 w-1/2 p-4 ">
          <p className=" pt-4 text-xl">
            I cam currently working with David in sandwich courses. We made
            youtube video about the tools we use to work.
          </p>
          <p>
            My principal job is to develop website using ReactJS who is a
            JavaScript library
          </p>
        </div>
      </div>
      <div className="text-xl">
        <p className="mb-4">
          As a developer this are the tools that i use to work
        </p>
        <hr className="border-2 border-green-700 w-1/5 m-auto" />
      </div>
      <div className="flex-auto mt-4 mb-4">
        <StaticImage src="../images/Figma.png" />
        <StaticImage src="../images/Tailwind.png" />
        <StaticImage src="../images/css.png" />
        <StaticImage src="../images/html.png" />
        <StaticImage src="../images/js.png" />
        <StaticImage src="../images/react.png" />
        <StaticImage src="../images/vsc.png" />
        <StaticImage src="../images/gatsbt.png" />
        <StaticImage src="../images/dvr.png" />
      </div>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
