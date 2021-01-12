import React from "react";
import { Link } from "gatsby";

const Footer = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let links

  if (isRootPath) {
    links = (
      <div className="o-footer__inner">
        <a href="/admin/">Admin Login</a>
      </div>
    )
  } else {
    links = (
      <div className="o-footer__inner">
        <a href="/admin/">Admin Login</a>
        <Link to="/">Back</Link>
      </div>
    )
  }

  return (
    <footer className="o-footer">
      { links }
    </footer>
  );
}

export default Footer;