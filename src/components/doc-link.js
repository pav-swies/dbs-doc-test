import React from "react";
import { Link } from "gatsby";

const DocLink = ({ post }) => (
  <li className="o-doc-link">
    <article>
      <Link className="u-faux-link" to={post.frontmatter.slug}></Link>
      <h2 className="o-doc-link__heading">
        { post.frontmatter.title }
      </h2> 
      <p>{ post.frontmatter.date }</p>
      <p>{ post.excerpt }</p>
      <p></p>
    </article>
  </li>
);

export default DocLink;