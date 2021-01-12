import React from "react";
import { graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";
import DocLink from  "../components/doc-link";

const IndexPage = ({
  data,
  data: {
    allMarkdownRemark: { edges },
  },
  location
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <DocLink key={ edge.node.id } post={ edge.node } />);

  const siteTitle = data.site.siteMetadata.title;

  return (
    <div className="o-wrapper">
      <title>{ siteTitle }</title>
      <Header title={ siteTitle } location={ location } />
      <main>
        {/* <p>Last updated: 12/01/2021</p> */}
        <p>A documentation page with information about the DbS dev process</p>
        <ul className="o-doc-list">
          { Posts }
        </ul>
      </main>
      <Footer location={ location }/>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`
