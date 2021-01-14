import React from "react";
import { Link } from "gatsby";

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  if (isRootPath) {
    return (
      <header className="o-header o-header--home">
        <h1 className="o-header__title o-header__title--large">{ title } 📑</h1>
        <p className="o-header__intro">A documentation page with information about the DbS dev process. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos asperiores repellat quo, neque amet.</p>
      </header>
    );
  } else {
    return (
      <header className="o-header">
        <Link className="o-header__title" to="/">{ title } 📑</Link>
        <Link to="/">Back</Link>
      </header>
    );
  };
}

export default Header;