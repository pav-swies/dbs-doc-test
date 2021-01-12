import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

export default function docTemplate({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <div className="o-wrapper">
      <Header title={ siteTitle } location={ location } />
      <article className="o-doc">
        <h1>{ frontmatter.title }</h1>
        <p>{ frontmatter.date }</p>
        <div className="o-doc__content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <Footer location={ location } />
    </div>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`