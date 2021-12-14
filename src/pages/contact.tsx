import * as React from "react";
import Layout from "../components/layout";

import Gravatar from "react-gravatar";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <iframe
        className="airtable-embed bg-transparent w-2/3 m-auto mt-12 border-4 rounded-lg  border-purple-400"
        src="https://airtable.com/embed/shrZLcDgGq0Kb6soN?backgroundColor=purple"
        height="1200"
        //style="background: transparent; border: 1px solid #ccc;"
      ></iframe>
    </Layout>
  );
};

export default Contact;
