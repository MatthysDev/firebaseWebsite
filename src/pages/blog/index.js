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
          <p className="justify-center w-2/4 m-auto text-2xl text-left">
            <Link className="pl-2 pt-4" to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
              height="200px"
              className="pt-4"
            />
            <p className="text-right text-base">
              Posted: {node.frontmatter.date}
            </p>
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
