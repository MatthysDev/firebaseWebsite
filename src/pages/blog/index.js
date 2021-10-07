import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <p className="justify-center m-auto text-2xl text-left">
            <div className="flex w-full">
              <div className="text-center m-auto w-1/2">
                <Link
                  className="pl-2 pt-4 pb-4 text-gray-400 hover:text-yellow-600"
                  to={`/blog/${node.slug}`}
                >
                  {node.frontmatter.title}
                </Link>
                <p className="pt-4 text-base m-auto">{node.frontmatter.date}</p>
              </div>
              <div className="m-8 ">
                <GatsbyImage
                  image={image}
                  alt={data.mdx.frontmatter.hero_image_alt}
                  height="150px"
                  className=" border-purple-400 border-2 pt-4 "
                />
              </div>
            </div>
            <hr className="w-2/3 m-auto border-green-700 border-2" />
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
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

export default BlogPage;
