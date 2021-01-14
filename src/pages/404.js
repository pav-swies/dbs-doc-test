import React from "react";
import { graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <div className="o-wrapper">
      <title>{ siteTitle } - 404</title>
      <Header title={ siteTitle } location={ location } />
      <article className="o-doc">
        <p>404 - Page not found</p>
      </article>
      <Footer location={ location } />
    </div>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;