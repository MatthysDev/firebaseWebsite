import * as React from "react";
import Layout from "../components/layout";

import Gravatar from "react-gravatar";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="sm:flex-col md:flex md:flex-row m-auto h-2/3 pb-4">
        <div className="m-auto h-2/3  md:p-4 md:mt-48 md:mb-48 ">
          <p className=" pt-4 text-2xl">Hi ! I'm Matthys 🤟, Welcome ! </p>
          <p className="pt-4 pb-8 text-center md:text-left text-lg">
            I'm a web student in computing technology
          </p>
        </div>

        <Gravatar
          email="ducrocq.matthys@gmail.com"
          className="border-purple-400 border-2  m-auto rounded-full "
          size={200}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
