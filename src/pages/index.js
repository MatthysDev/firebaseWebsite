import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p className="pt-4 pb-2 text-left text-lg">
        I'm making this by following the Gatsby Tutorial.
      </p>
      <StaticImage
        className="border-green-400 border-4"
        alt="Beatifull picture"
        src="../images/image1.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
