import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <div className="bg-gray-800 overflow-auto h-screen">
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <div className="pb-12">
          <p className=" pt-2 pb-2">{data.mdx.frontmatter.date}</p>
          <div className="flex-initial">
            <div className="w-3/4 lg:w-5/12 m-auto border-purple-400 border-2">
              <GatsbyImage
                className="pt-6"
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
              />
            </div>
            <div>
              <p className="pt-2 pb-2">
                {" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                  {data.mdx.frontmatter.hero_image_credit_text}
                </a>
              </p>
              <div className="prose m-auto text-left prose-a:text-purple-300 prose-a:no-underline prose-headings:text-white prose-h1:border-b-2 prose-headings:pb-2 prose-h1:border-purple-400 w-5/6 text-white">
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export default BlogPost;
