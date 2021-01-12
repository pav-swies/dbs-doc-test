import React from "react";
import { Link } from "gatsby";

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="o-header__title o-header__title--large">
        <Link to="/">{ title }</Link>
      </h1>
    )
  } else {
    header = (
      <>
        <Link className="o-header__title" to="/">{ title }</Link>
        <Link to="/">Back</Link>
      </>
    )
  };

  return (
    <header className="o-header">
      { header }
    </header>
  );
}

export default Header;