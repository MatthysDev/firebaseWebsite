import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Follow from "../components/follow";
import MyTalks from "../components/MyTalks";

const Talks = () => {
  return (
    <Layout pageTitle={"Slides"}>
      <h1 className="text-center text-5xl pt-8">Talks</h1>
      <div className="w-2/3  m-auto pt-12 text-justify text-xl leading-relaxed">
        Hey 🤟, I'm Matthys Ducrocq, a French internship student in React and
        React Native development. I'm currently learning new Technologies like
        Gatsby, GraphQL and Tailwind. If you want to contact me you can find me
        on{" "}
        <a
          href="https://twitter.com/matthysd_dev"
          target="_blank"
          rel="noreferrer"
          className="text-purple-400 hover:text-purple-600"
        >
          Twitter
        </a>{" "}
        or{" "}
        <a
          href="https://matthys.dev/contact"
          target="_blank"
          rel="noreferrer"
          className="text-purple-400 hover:text-purple-600"
        >
          reply to this form
        </a>
        .
      </div>
      <div className="w-2/3  m-auto pt-12 text-justify text-xl leading-relaxed">
        If you want to see my presentations, you can find them{" "}
        <a
          href="https://matthys.dev/slides"
          className="text-purple-400 hover:text-purple-600"
        >
          here
        </a>
        !
      </div>
      <Follow />
      <MyTalks />
    </Layout>
  );
};

export default Talks;
