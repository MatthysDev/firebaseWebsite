import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="flex m-auto h-2/3 ">
        <div className="m-auto h-2/3  p-4 mt-48 mb-48 ">
          <p className=" pt-4 text-2xl">Hi ! I'm Matthys 🤟, Welcome ! </p>
          <p className="pt-4 pb-8 text-left text-lg">
            I'm a web student in computing technology
          </p>
        </div>
        <StaticImage
          className="border-green-700 border-2 w-1/3 m-auto"
          alt="Beatifull picture"
          src="../images/image1.jpg"
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
