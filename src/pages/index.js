import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p className=" pt-4 text-3xl">Welcome on my website ! </p>
      <p className="pt-4 pb-8 text-left text-lg">
        I'm making this with Gatsby and deploy it with Netlify ! I'm a web
        student in computing technology
      </p>
      <StaticImage
        className="border-green-400 border-4 w-2/3"
        alt="Beatifull picture"
        src="../images/image1.jpg"
      />
      <p className="pt-8 text-left text-lg">
        Bla jkaz zakldj jjdaoi d jau ezh hezfh k
      </p>
    </Layout>
  );
};

export default IndexPage;
