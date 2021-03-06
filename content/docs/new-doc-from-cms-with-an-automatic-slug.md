---
title: New doc from CMS with an automatic slug
date: 2021-01-13T13:28:10.396Z
---
Please work

Example of prism js with custom theme

```jsx
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
        <header className="o-doc__header">
          <h1 className="o-doc__heading">{ frontmatter.title }</h1>
          <p className="o-doc__date">{ frontmatter.date }</p>
        </header>
        <div className="o-doc__content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <Footer location={ location } />
    </div>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`
```